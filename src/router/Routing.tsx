import Home from '@/pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
