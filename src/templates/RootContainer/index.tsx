import 'whatwg-fetch'
import { RecoilRoot } from 'recoil'
import { FC, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { PageContainer } from 'templates/PageContainer'

export type RootContainerProps = {
  children: ReactNode
}

export const RootContainer: FC<RootContainerProps> = ({
  children,
}: RootContainerProps) => {
  return (
    <div className="root-container">
      <ChakraProvider>
        <RecoilRoot>
          <PageContainer>{children}</PageContainer>
        </RecoilRoot>
      </ChakraProvider>
    </div>
  )
}

export default RootContainer
