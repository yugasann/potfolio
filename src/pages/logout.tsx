import type { NextPage } from 'next'
import { useEffect } from 'react'
import useAuth from 'hooks/useAuth'

const LogoutPage: NextPage = () => {
  const { logout } = useAuth()

  useEffect(() => {
    logout().then(() => (location.href = '/login'))
  })

  return <p>logging out...</p>
}

export default LogoutPage
