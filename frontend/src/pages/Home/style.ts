import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TableContainer = styled.div`
  overflow: auto;
`
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  tr {
    border: 1px solid #d1d5db;
    display: flex;
    gap: 3rem;
    padding: 1rem 2rem;
    
  }

  td {
    margin: auto 0;
    width: 25%;
  }
`

export const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CpfAndCellphoneContainer = styled(NameAndEmailContainer)`
    span:first-child {
    color: #52525b;
    font-weight: bold;
  }
`

const colors = {
  green: '#22c55e',
  red: '#ef4444',
  yellow: '#eab308',
  snow: '#d1d5db',
}

interface statusIndicatorProps {
  $statusColor: keyof typeof colors
}
export const StatusIndicator = styled.span<statusIndicatorProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 9999px;
    background: ${props => colors[props.$statusColor]};
  }
`

export const EditLinkButton = styled(Link)`
  padding: 0.5rem 2rem;
  cursor: pointer;
  border: 1px solid #fb923c;
  color: #fb923c;
  font-weight: bold;
  margin-left: 2rem;
  text-decoration: none;

  &&:hover {
    background-color: #fb923c;
    color: white;
  }

`
export const ShowingCustomersParagraph = styled.p`
  span {
    color: #27272a;
    font-weight: bold;
    font-size: 1.125rem;
  }
`
