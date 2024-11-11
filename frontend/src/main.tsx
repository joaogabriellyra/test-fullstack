import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { GlobalStyle } from './styles/global'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
)
