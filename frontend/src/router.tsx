import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewCustomerPage } from './pages/NewCustomer'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-customer" element={<NewCustomerPage />} />
    </Routes>
  )
}
