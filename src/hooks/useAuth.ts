import { atom, useRecoilState } from 'recoil'
import useRequest from 'hooks/useRequest'
import { AuthToken } from 'types'

export type RequestConfigProps = {
  method: string
  body: unknown
}

export type LoginUser = {
  name: string
  email: string
}

export type RequestStateProps = {
  user?: LoginUser | null
  token: string | null
}

export const authState = atom<RequestStateProps>({
  key: 'common-auth',
  default: {
    user: null,
    token: null,
  },
})

export default function useAuth() {
  const { request } = useRequest()
  const [state, setState] = useRecoilState(authState)

  async function getLoginUser() {
    let token: AuthToken

    try {
      const retrievedData = JSON.parse(
        window.localStorage.getItem('token') || '{}',
      ) as { token: AuthToken }

      token = retrievedData.token || null
    } catch {
      window.localStorage.removeItem('token')
      return null
    }

    if (!token || !token.accessToken) {
      // Not try to attempt getting user if token not found
      return null
    }

    try {
      // TODO: Comment in after login API was ready
      // 一旦ダミーAPIを呼び出してトークンが有効か検証
      // await request('http://localhost:3000/admin/tests', {
      //   headers: { ...token.token } as Headers,
      // })
      // Get login user
      // const userResult = await request<LoginUser>('/users/me')
      const userResult = {
        name: 'John Wick',
        email: 'johnwick@example.com',
      }

      return { user: { ...userResult }, token }
    } catch (e) {
      window.localStorage.removeItem('token')
    }
  }
  const login = async (email: string, password: string) => {
    await request({
      url: '/login',
      method: 'POST',
      params: { email, password },
    })

    const token: AuthToken = {
      accessToken: 'some secure token',
      tokenType: 'Bearer',
      client: 'eeffgghh',
      expiry: '9999999999',
      uid: '1234-1234-1234-1234',
    }
    window.localStorage.setItem('token', JSON.stringify({ token }))
  }
  const logout = async () => {
    window.localStorage.removeItem('token')
    setState((prevState) => {
      return {
        ...prevState,
        user: null,
        token: null,
      }
    })
  }
  return {
    user: state.user,
    getLoginUser,
    login,
    logout,
  }
}
