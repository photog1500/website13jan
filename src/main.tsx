import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlinkProvider } from '@blinkdotnew/react'
import { Toaster } from 'sonner'
import App from './App'
import './index.css'

function getProjectId(): string {
  const envId = import.meta.env.VITE_BLINK_PROJECT_ID
  if (envId) return envId
  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
  const match = hostname.match(/^([^.]+)\.sites\.blink\.new$/)
  if (match) return match[1]
  return 'project-showcase-3ir5xy77'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlinkProvider
      projectId={getProjectId()}
      publishableKey={import.meta.env.VITE_BLINK_PUBLISHABLE_KEY}
    >
      <Toaster position="top-right" expand={true} richColors />
      <App />
    </BlinkProvider>
  </React.StrictMode>,
)
