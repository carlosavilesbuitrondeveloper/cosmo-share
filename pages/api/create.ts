import type { NextApiRequest, NextApiResponse } from 'next'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'

type Data = {
	status: string
	message?: string
	content?: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const address = '0xb28d5a92605198fa66a577d7ab2dbbf1a0e78f2b'
		const sdk = new ThirdwebSDK('mumbai')
		const contractAddress = await sdk.deployer.deploySplit({
			name: 'My Split',
			recipients: [
				{
					address: address,
					sharesBps: 100 * 100,
				},
			],
		})
		res.status(200).json({
			status: 'success',
			message: 'Contract deployed',
			content: contractAddress,
		})
	} catch (e) {
		console.log(e)
		res.status(200).json({
			status: 'error',
			message: 'Contract failed to deply',
		})
	}
}
