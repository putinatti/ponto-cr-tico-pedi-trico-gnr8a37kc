import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Activity } from 'lucide-react'

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { user, loading, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Activity className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    )
  }

  if (!user) {
    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')
      const { error } = await signIn(email, password)
      if (error) setError('Email ou senha inválidos.')
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Acesso Restrito</h1>
            <p className="text-slate-500 mt-2">Faça login para acessar o Ponto Crítico.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-xl text-lg font-semibold"
            >
              Entrar
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-500">
            Dica: email pputinatti@gmail.com / senha Skip@Pass
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
