import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1 className='text-green-500 text-center text-4xl'>Welcome to CosmoShare</h1>
			<Link href='/auth'>Sign In</Link>
		</div>
	)
}

export default Home
