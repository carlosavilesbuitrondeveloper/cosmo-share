import 'antd/dist/antd.css'
import '../styles/globals.scss'
import Layout from '../src/components/layout'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
