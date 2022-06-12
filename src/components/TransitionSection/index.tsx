import { FC } from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, forwardRef } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
  baseStyle: {
    transition: 0,
  },
})

export type TransitionProps = {
  initial: object
  animate: object
  transition: object
}

const TransitionDiv = forwardRef<TransitionProps, typeof StyledDiv>(
  (props, ref) => <StyledDiv ref={ref} {...props} />,
)

export type SectionProps = {
  duration?: number
  delay?: number
}

const TransitionSection: FC<SectionProps> = ({
  children,
  duration = 0.8,
  delay = 0,
}) => (
  <TransitionDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </TransitionDiv>
)

export default TransitionSection
