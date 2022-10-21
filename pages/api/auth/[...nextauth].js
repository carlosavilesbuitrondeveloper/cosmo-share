import CredentialsProvider from 'next-auth/providers/credentials'
import { getFirestore } from 'firebase-admin/firestore'
import connectFirestore from '../../../lib/firebase'
import NextAuth from 'next-auth'
import Moralis from 'moralis'

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'MoralisAuth',
			credentials: {
				message: {
					label: 'Message',
					type: 'text',
					placeholder: '0x0',
				},
				signature: {
					label: 'Signature',
					type: 'text',
					placeholder: '0x0',
				},
			},
			async authorize(credentials) {
				try {
					const { message, signature } = credentials

					await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })

					const { address, profileId, expirationTime } = (await Moralis.Auth.verify({ message, signature, network: 'evm' })).raw

					const firebaseApp = connectFirestore()
					const firebaseDB = getFirestore(firebaseApp)

					const user = { address, profileId, expirationTime, signature }

					//user setup or get
					const userDocs = await firebaseDB.collection('users').doc(profileId)
					const userDoc = await userDocs.get()

					let setupUser = {
						user: profileId,
						wallet: address,
						assets: [],
					}

					if (!userDoc.exists) {
						await userDocs.set(setupUser)
					} else {
						setupUser = userDoc.data()
					}

					return user
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error(e)
					return null
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user)
			return token
		},
		async session({ session, token }) {
			session.expires = token.user.expirationTime
			session.user = token.user
			return session
		},
	},
	session: {
		strategy: 'jwt',
	},
})
