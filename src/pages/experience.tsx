import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import Experience from 'containers/Experience'
import MainLayout from 'components/Layouts/main'

const ExperiencePage: NextPageWithLayout = () => {
  return <Experience />
}

ExperiencePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default ExperiencePage
