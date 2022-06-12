import { atom, useRecoilState } from 'recoil'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export type RequestOptionsProps = {
  showIndicator?: boolean
}

export type RequestStateProps = {
  loadings: number
}

export const requestState = atom<RequestStateProps>({
  key: 'common-request',
  default: {
    loadings: 0,
  },
})

export default function useRequest() {
  const [state, setState] = useRecoilState(requestState)

  const axiosInstance = axios.create({
    baseURL: process.env.API_HOST,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })

  const request = async (
    config: AxiosRequestConfig,
    options: RequestOptionsProps = { showIndicator: true },
  ): Promise<AxiosResponse> => {
    if (options.showIndicator) {
      setState((prevState) => {
        return {
          ...prevState,
          loadings: prevState.loadings + 1,
        }
      })
    }

    try {
      return axiosInstance(config)
    } catch (err) {
      console.error('API request failed:', config.url, options)
      throw err
    } finally {
      if (options.showIndicator) {
        setState((prevState) => {
          return {
            ...prevState,
            loadings: prevState.loadings - 1,
          }
        })
      }
    }
  }

  return {
    state,
    request,
  }
}
