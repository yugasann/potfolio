import React, { FC } from 'react'
import {
  LinkBox,
  LinkOverlay,
  LinkOverlayProps,
  useColorModeValue,
} from '@chakra-ui/react'

export type LinkItemProps = LinkOverlayProps & {
  href: string
  path: string
  _target?: string
  children?: React.ReactNode
}
const LinkItem: FC<LinkItemProps> = ({ href, path, children, ...rest }) => {
  const active = path !== '/' && href.includes(path)

  const inactiveColor = useColorModeValue('Black', 'whiteAlpha.900')
  return (
    <LinkBox
      bg={active ? 'yellow.400' : undefined}
      color={active ? 'Black' : inactiveColor}
      borderRadius="lg"
      cursor="pointer"
      p="2"
    >
      <LinkOverlay href={href} {...rest}>
        {children}
      </LinkOverlay>
    </LinkBox>
  )
}

export default LinkItem
