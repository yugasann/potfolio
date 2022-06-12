import { useEffect, useState, VFC } from 'react'
import { Container, Box, Image } from '@chakra-ui/react'
import { differenceInYears } from 'date-fns'
import TransitionSection from 'components/TransitionSection'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'

const About: VFC = () => {
  const startYear = 2016
  const [experienceInYear, setExperienceInYear] = useState<number>()

  useEffect(() => {
    const diff = differenceInYears(new Date(), new Date(2016, 1, 1))
    setExperienceInYear(diff)
  }, [])

  return (
    <Container mt="3em" mb="3em">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Title as="h2" variant="page-title">
            Yuga Ihara
          </Title>
          <SubTitle>SOFTWARE ENGINEER</SubTitle>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="grey.500"
            borderWidth={6}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile.png`}
            alt="Profile image"
          />
        </Box>
      </Box>

      <TransitionSection delay={0.2}>
        <Paragraph m="1em">
          {startYear} 年から 約{experienceInYear}年+
          フルスタックエンジニアとして活動しています。
          エストニアの大学でサイバーセキュリティー学部を専攻し、在学中から現地企業にてソフトウェアエンジニアとして就職しました。
        </Paragraph>
      </TransitionSection>
      <TransitionSection delay={0.4}>
        <Paragraph m="1em">
          スタートアップ・エンタープライズ環境共に Agile/Scrum
          での開発経験が豊富です。
        </Paragraph>
      </TransitionSection>
      <TransitionSection delay={0.4}>
        <Paragraph m="1em">
          バックエンド、フロントエンド、Windowsアプリ開発、インフラ構築など
          多方面から様々なプロジェクトに携わってきました。
        </Paragraph>
      </TransitionSection>

      <TransitionSection delay={0.6}>
        <Paragraph m="1em">
          直近では新事業で0からSDKを開発する少数先鋭チームのリードエンジニアを経験しました。最近ではマネジメントやDevOps関連の技術に注力しています。
        </Paragraph>
      </TransitionSection>
    </Container>
  )
}

export default About
