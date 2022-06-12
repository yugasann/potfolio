import { atom, useRecoilState } from 'recoil'

export type UnsavedConfirmProps = {
  method: string
  body: unknown
}

export type RequestStateProps = {
  confirm: boolean
}

export const unsavedConfirmState = atom<RequestStateProps>({
  key: 'common-unsaved-confirm',
  default: {
    confirm: false,
  },
})

export default function useUnsavedConfirm() {
  const [state, setState] = useRecoilState(unsavedConfirmState)

  const showConfirm = (confirm: boolean) => {
    setState({ confirm })
  }

  return {
    confirm: state.confirm,
    showConfirm,
  }
}
