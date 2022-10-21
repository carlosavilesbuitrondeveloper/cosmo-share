import Header from './header'
import Footer from './header'

type Props = {
	children: React.ReactElement
}

export default function Layout({ children }: Props) {
	return (
		<div className='flex flex-col h-screen w-full'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
