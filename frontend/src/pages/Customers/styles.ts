import styled from 'styled-components'

export const CustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const LookAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  height: 32px;
  font-size: 0.875rem;
  color: #f4f4f5;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 2rem;

  &:hover {
    background-color: #ea580c;
  }
`
