import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../src/components/layout'

const Home: NextPage = () => {
	return (
		<Layout>
			<div className='h-full flex flex-col items-center justify-center'>
				<h1 className='text-green-500 text-4xl flex'>Welcome to CosmoShare</h1>
				<Link href='/auth'>Sign In</Link>
			</div>
		</Layout>
	)
}

export default Home
