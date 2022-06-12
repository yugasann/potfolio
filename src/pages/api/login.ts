import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthToken } from 'types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthToken>,
) {
  const token: AuthToken = {
    accessToken: 'some secure token',
    tokenType: 'Bearer',
    client: 'some client',
    expiry: '9999999999',
    uid: '1234-1234-1234-1234',
  }

  res.status(200).json(token)
}
