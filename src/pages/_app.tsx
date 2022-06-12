import 'styles/globals.css'
import { AppPropsWithLayout } from '../types'
import { RootContainer } from 'templates/RootContainer'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <RootContainer>{getLayout(<Component {...pageProps} />)}</RootContainer>
  )
}

export default MyApp
