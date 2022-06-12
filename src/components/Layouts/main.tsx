import React, { FC } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Metadata from 'components/Metadata'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'

type Props = {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <Box as="main" pb={8}>
      <Metadata />

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}

export default MainLayout
