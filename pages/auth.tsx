import type { NextPage } from 'next'
import { useMetamask, useAddress } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Auth: NextPage = () => {
	const router = useRouter()
	const connectWithMetamask = useMetamask()
	const address = useAddress()

	useEffect(() => {
		console.log(address)
		if (address) router.push('/dashboard')
	}, [address])

	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1 className='text-green-500 text-center text-4xl'>Connect Wallet</h1>
			<button onClick={() => connectWithMetamask()}>MetaMask</button>
		</div>
	)
}

export default Auth
