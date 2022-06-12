import { FC } from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
// import { GiHollowCat } from 'react-icons/gi'

const Component = styled(Text)`
  margin: 1em auto;
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  span {
    display: table-cell;
    padding: 0 1px;
  }
  @keyframes jump {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
      box-shadow: 0 10px 0 rgb(242, 198, 64);
    }
    100% {
      transform: translateY(0px);
    }
  }

  span:hover {
    color: #f2c640;
    animation: jump 1.5s infinite;
  }
`

const Logo: FC = () => {
  return (
    <Link href="/">
      <a>
        <Component>
          {'Masaki Ihara'.split('').map((char, i) => (
            <span key={i}>{char}</span>
            // <span style={{ animationDelay: (i * 0.1).toString() + 's' }}>
            //   {char}
            // </span>
          ))}
        </Component>
      </a>
    </Link>
  )
}

export default Logo
