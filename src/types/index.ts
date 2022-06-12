import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

export type AuthToken = {
  accessToken: string | null
  client: string | null
  expiry: string | null
  tokenType: string | null
  uid: string | null
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type ExperienceData = {
  title: string
  name: string
  size?: string
  location: string
  period: string
  description: string
  technology?: Array<string>
}
