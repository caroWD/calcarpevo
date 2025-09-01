import App from '@/App'
import { BrowserRouter, Routes, Route } from 'react-router'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
