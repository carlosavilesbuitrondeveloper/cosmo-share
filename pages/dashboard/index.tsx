import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'

const Dashboard: NextPage = () => {
	const router = useRouter()
	const address = useAddress()
	const logout = useDisconnect()

	const handleDisconnect = async () => {
		await logout()
		router.push('/')
	}

	const handleCreate = async () => {
		try {
			const results = await fetch('/api/create')
			const resultsJson = await results.json()
			console.log(resultsJson)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1 className='text-green-500 text-center text-4xl'>Dashboard</h1>
			<p>User: {address}</p>
			<button onClick={handleDisconnect}>Logout</button>
			<br />
			<br />
			<button onClick={handleCreate}>Create Contract</button>
		</div>
	)
}

export default Dashboard
