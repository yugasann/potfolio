import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import Skills from 'containers/Skills'
import MainLayout from 'components/Layouts/main'

const SkillsPage: NextPageWithLayout = () => {
  return <Skills />
}

SkillsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default SkillsPage
