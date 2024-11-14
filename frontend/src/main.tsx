import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </StrictMode>
)
