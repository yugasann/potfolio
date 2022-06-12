import React from 'react'
import joi from 'joi'
import {
  Container,
  Box,
  Center,
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import { FormInputField, InputProps } from 'components/FormInputField'
import useForm from 'hooks/useForm'
import useAuth from 'hooks/useAuth'

type LoginForm = {
  email: string
  password: string
}

const schema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .label('メールアドレス'),
  password: joi.string().required().label('パスワード'),
})

export const Login: React.VFC = () => {
  const form = useForm<LoginForm>({ schema })
  const { login } = useAuth()

  React.useEffect(() => {
    form.setInitialValues({
      email: '',
      password: '',
    })
    // Render時に初期化するだけなのでdepsには入れない
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = async () => {
    const { values, errors } = form.validate()

    if (errors) {
      form.setOptions({
        returnErrorOnTouched: false,
      })
      return
    }

    await login(values.email, values.password)
    location.href = '/'
    return
  }

  return (
    <Container css={containerCss}>
      <Box mb={8}>
        <Center>
          <h2 className="title"> LOGIN PAGE </h2>
        </Center>
      </Box>
      <Box border={`1px solid`} borderRadius={5} p={4}>
        <Box mb={4}>
          <FormControl isInvalid={!!form.errors?.email}>
            <FormLabel>メールアドレス</FormLabel>
            <FormInputField
              form={form}
              name="email"
              type="text"
              render={(props: InputProps<LoginForm>) => <Input {...props} />}
            />
            <FormErrorMessage>{form.errors?.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box mb={4}>
          <FormControl isInvalid={!!form.errors?.password}>
            <FormLabel>パスワード</FormLabel>
            <FormInputField
              form={form}
              name="password"
              type="text"
              render={(props: InputProps<LoginForm>) => (
                <Input {...props} type="password" />
              )}
            />
            <FormErrorMessage>
              {form.errors?.password?.message}
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Center>
          <Button onClick={handleLogin} isFullWidth>
            Login
          </Button>
        </Center>
      </Box>
    </Container>
  )
}

const containerCss = css`
  padding-top: 25vh;

  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
  }

  .password-reset-link {
    font-size: 16px;
  }
`
