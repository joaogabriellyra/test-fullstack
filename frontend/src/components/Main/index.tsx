import { MainContainer } from './styles'

interface MainProps {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return <MainContainer>{children}</MainContainer>
}
