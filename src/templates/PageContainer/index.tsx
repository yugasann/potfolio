import React from 'react'
// import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
// import useUnsavedConfirm from 'hooks/useUnsavedConfirm'
import useRequest from 'hooks/useRequest'
// import useAuth from 'hooks/useAuth'
// import { publicRoutes } from 'constants/common'

export type PageContainerProps = {
  children: React.ReactNode
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
}: PageContainerProps) => {
  // const router = useRouter()
  // const { getLoginUser } = useAuth()
  const { state: requestState } = useRequest()
  // const unsavedConfirm = useUnsavedConfirm()
  const toast = useToast()

  // const [authChecked, setAuthChecked] = React.useState(false)
  // const isPublicRoute = React.useMemo(() => {
  //   return publicRoutes.indexOf(router.asPath.split('?')[0]) >= 0
  // }, [router.asPath])

  React.useEffect(() => {
    window.addEventListener('unhandledrejection', (event) => {
      if (event.reason === 'routing-cancelled') {
        // Next routerでルーティングキャンセルの場合は何もしない
        event.preventDefault()
        return
      }
    })
  }, [toast])

  // React.useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     const message = '編集中のデータは破棄されますがよろしいですか？'
  //     event.preventDefault()
  //     event.returnValue = message
  //     return message
  //   }
  //
  //   if (unsavedConfirm.confirm) {
  //     window.addEventListener('beforeunload', handleBeforeUnload)
  //   }
  //
  //   return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  // }, [unsavedConfirm.confirm])

  // React.useEffect(() => {
  //   const beforeRouteHandler = () => {
  //     if (
  //       unsavedConfirm.confirm &&
  //       !window.confirm('未保存のデータは破棄されます。よろしいですか?')
  //     ) {
  //       router.events.emit('routeChangeError')
  //       // `Route change to "${url}" was aborted (this error can be safely ignored). See https://github.com/zeit/next.js/issues/2476.`
  //       throw `routing-cancelled`
  //     }
  //   }
  //
  //   router.events.on('routeChangeStart', beforeRouteHandler)
  //
  //   return () => {
  //     router.events.off('routeChangeStart', beforeRouteHandler)
  //   }
  // }, [unsavedConfirm.confirm, router])

  // React.useEffect(() => {
  //   checkAuth()
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // const checkAuth = async () => {
  //   const user = await getLoginUser()
  //   console.log(user)
  //
  //   if (isPublicRoute && user) {
  //     // Reload page to safely remove data remaining on memory
  //     location.href = '/'
  //     return false
  //   }
  //
  //   if (!isPublicRoute && !user) {
  //     location.href = '/login'
  //     return false
  //   }
  //
  //   setAuthChecked(true)
  //   return true
  // }

  const LoadingIndicator = React.useMemo(() => {
    if (requestState.loadings > 0) {
      return <div>Loading...</div>
    }

    return null
  }, [requestState.loadings])

  // if (!authChecked) {
  //   return <div>Auth checking...</div>
  // }

  return (
    <div className="page-container">
      {/* APIコールのローディングインジケーターの表示 */}
      {LoadingIndicator}
      {children}
    </div>
  )
}

export default PageContainer
