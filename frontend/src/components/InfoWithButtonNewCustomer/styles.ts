import styled from 'styled-components'

export const InfoWithButtonNewCustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const LookAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;

  a {
    height: 2rem;
  }
`
export const LookTheCustomersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  h2 {
    color: #52525b;
  }

  span {
    color: #71717a;
  }
`
export const NewCustomerButton = styled.button`
  background-color:#fb923c;
  border: none;
  padding: 0 1rem;
  height: 2rem;
  font-size: 0.875rem;
  color: #f4f4f5;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ea580c;
  }
`