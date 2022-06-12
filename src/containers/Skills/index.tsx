import { VFC } from 'react'
import {
  Container,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Tag,
  HStack,
  Table,
  Td,
  Tbody,
  Tr,
  Progress,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import {
  languages,
  frameworks,
  databases,
  infrastructure,
  workflow,
  others,
} from './data.json'
import Title from 'components/Title'
import TransitionSection from 'components/TransitionSection'
import SubTitle from 'components/SubTitle'

const getLevelColor = (level: number) => {
  if (level > 80) return 'green'
  if (level > 50) return 'teal'
  if (level > 30) return 'orange'
  if (level > 20) return 'red'
}
const Skills: VFC = () => {
  return (
    <Container mt="3em" mb="3em">
      <Title m="1em 0" size="md" variant="section-title">
        PROFESSIONAL SKILLS
      </Title>
      <TransitionSection delay={0.1}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          PROGRAMMING LANGUAGES
        </SubTitle>
        <HStack shouldWrapChildren wrap={'wrap'}>
          {languages.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.1}>
              <Flex
                m={2}
                direction="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Text>{data.name}</Text>
                <CircularProgress
                  value={data.level}
                  size="75px"
                  thickness="15px"
                  color={getLevelColor(data.level)}
                  mt={1}
                >
                  <CircularProgressLabel>{data.level}</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </TransitionSection>
          ))}
        </HStack>
      </TransitionSection>

      <TransitionSection delay={0.2}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          FRAMEWORKS
        </SubTitle>
        <HStack shouldWrapChildren wrap={'wrap'}>
          {frameworks.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.1}>
              <Tag m={1} variant="outline">
                {data}
              </Tag>
            </TransitionSection>
          ))}
        </HStack>
      </TransitionSection>

      <TransitionSection delay={0.3}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          DATABASES
        </SubTitle>
        <Table variant="unstyled" flex="grow">
          <Tbody>
            {databases.map((data, i) => (
              <Tr key={i}>
                <Td>
                  <Progress
                    width={150}
                    colorScheme={getLevelColor(data.level)}
                    size="lg"
                    value={data.level}
                  />
                </Td>
                <Td>
                  <Text>{data.name}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TransitionSection>

      <TransitionSection delay={0.4}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          INFRASTRUCTURE
        </SubTitle>
        <HStack shouldWrapChildren wrap={'wrap'}>
          {infrastructure.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.1}>
              <Tag m={1} variant="outline">
                {data}
              </Tag>
            </TransitionSection>
          ))}
        </HStack>
      </TransitionSection>

      <TransitionSection delay={0.5}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          WORKFLOW
        </SubTitle>
        <List spacing={3}>
          {workflow.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.1}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                {data}
              </ListItem>
            </TransitionSection>
          ))}
        </List>
      </TransitionSection>

      <TransitionSection delay={0.6}>
        <SubTitle m="1em 0" size="md" variant="section-title">
          OTHERS
        </SubTitle>
        <Stack direction="row">
          {others.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.1}>
              <Tag m={1} variant="outline">
                {data}
              </Tag>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>
    </Container>
  )
}

export default Skills
