import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EditCustomerPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
interface handlerErrorProps {
  $hasError?: string
}

export const Input = styled.input<handlerErrorProps>`
  padding: 0.875rem 1rem;
  width: 30%;
  border: 1px solid ${props => (props.$hasError ? 'red' : '#d1d5db')};
  color: #52525b;
  font-weight: 700;
  -webkit-text-fill-color: #52525b;
  
  &:focus {
    box-shadow: 0 0 0 2px ${props => (props.$hasError ? 'red' : '#fb923c')};
  }

  &::placeholder {
    color: #71717a;
    font-weight: 400;
  }
`
export const Select = styled.select<handlerErrorProps>`
  padding: 0.875rem 1rem;
  width: 30%;
  border: 1px solid ${props => (props.$hasError ? 'red' : '#d1d5db')};
  background: white;
  color: #52525b;
  font-weight: 700;

  &:focus {
    box-shadow: 0 0 0 2px ${props => (props.$hasError ? 'red' : '#fb923c')};
  }

  &::placeholder {
    color: #71717a;
    font-weight: 400;
  } 
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

export const UpdateButton = styled.button`
  background-color: #fb923c;
  color: #f4f4f5;
  border: 1px solid transparent;
  font-weight: bold;
  padding: 0.5rem 2rem;
  cursor: pointer;


  &:hover {
    background-color: #ea580c;
  }
`

export const BackLinkButton = styled(Link)`
  padding: 0.5rem 3rem;
  cursor: pointer;
  border: 1px solid #fb923c;
  color: #fb923c;
  font-weight: bold;
  text-decoration: none;

  &&:hover {
    background-color: #ea580c;
    color: white;
  }
`

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: red;
  font-size: 12px;
  margin-top: 4px;
`
