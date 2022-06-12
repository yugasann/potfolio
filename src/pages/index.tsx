import { ReactElement } from 'react'
import About from 'containers/About'
import { NextPageWithLayout } from 'types'
import MainLayout from 'components/Layouts/main'

const HomePage: NextPageWithLayout = () => {
  return <About />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
