import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import Layout from '../src/components/layout'

const activeChainId = ChainId.Mumbai

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider desiredChainId={activeChainId}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThirdwebProvider>
	)
}

export default MyApp
