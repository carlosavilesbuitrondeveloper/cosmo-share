import { useAddress } from '@thirdweb-dev/react'
import Link from 'next/link'

export default function Header() {
	const address = useAddress()

	return (
		<header className='flex justify-between py-3 px-3 bg-white text-black shadow-md'>
			<div>
				<Link href='/'>
					<a>CosmoShare</a>
				</Link>
			</div>
			<nav>
				{address && (
					<Link href='/dashboard'>
						<a>Dashboard</a>
					</Link>
				)}
				{!address && (
					<Link href='/auth'>
						<a>Sign Up / Login</a>
					</Link>
				)}
			</nav>
		</header>
	)
}
