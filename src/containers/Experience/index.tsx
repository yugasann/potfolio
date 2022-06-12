import { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import { data as fullTimeWorkHistory } from './full_time_work_history.json'
import { data as partTimeWorkHistory } from './part_time_work_history.json'
import { data as academicHistory } from './academic_history.json'
import Title from 'components/Title'
import Exp from 'components/Experience'

const Experience: NextPage = () => {
  return (
    <Container mt="3em" mb="3em">
      <Title m="1em 0" size="md" variant="section-title">
        PROFESSIONAL EXPERIENCE (FULL-TIME)
      </Title>

      {fullTimeWorkHistory.map((data, i) => {
        return (
          <Exp
            key={i}
            isSequenced={i !== fullTimeWorkHistory.length - 1}
            delay={i * 0.1}
            {...data}
          />
        )
      })}

      <Title m="1em 0" size="md" variant="section-title">
        PROFESSIONAL EXPERIENCE (PART-TIME)
      </Title>

      {partTimeWorkHistory.map((data, i) => {
        return (
          <Exp
            key={i}
            isSequenced={i !== fullTimeWorkHistory.length - 1}
            delay={i * 0.1}
            {...data}
          />
        )
      })}

      <Title m="1em 0" size="md" variant="section-title">
        EDUCATION
      </Title>
      {academicHistory.map((data, i) => {
        return (
          <Exp
            key={i}
            isSequenced={i !== 0}
            duration={0.2}
            delay={i * 0.1}
            {...data}
          />
        )
      })}
    </Container>
  )
}

export default Experience
