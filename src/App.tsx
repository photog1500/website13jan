import { useAuth } from './hooks/useAuth'
import { Navbar } from './components/layout/Navbar'
import { LandingPage } from './pages/LandingPage'
import { Dashboard } from './pages/Dashboard'
import { Spinner } from './components/ui/spinner'

export default function App() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {isAuthenticated ? <Dashboard /> : <LandingPage />}
      </main>
    </div>
  )
}
