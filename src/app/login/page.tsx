'use client'
// Login page orchestrator
import LoginForm from '@/components/LoginForm'
import { useLogin } from '@/application/hooks/useLogin'

export default function LoginPage() {
  const { login, loading, error } = useLogin()

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={login} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
