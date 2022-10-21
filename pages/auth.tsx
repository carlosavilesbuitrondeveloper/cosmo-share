import type { NextPage } from 'next'

const Auth: NextPage = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1 className='text-green-500 text-center text-4xl'>Connect Wallet</h1>
			<button>MetaMask</button>
		</div>
	)
}

export default Auth
