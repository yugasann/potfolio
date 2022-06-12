import { FC } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <Box align="center" fontSize="sm">
      <Image
        maxWidth="100px"
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/seal-csm.png`}
        alt="csm image"
      />
      <Text opacity={0.4}>
        &copy; {new Date().getFullYear()} Yuga Ihara. All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
