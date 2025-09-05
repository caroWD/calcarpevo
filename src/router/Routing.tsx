import { FlatFigures, Home, SolidFigures } from '@/pages/index'
import { Rectangle, Square } from '@/pages/flat-figures'
import { BrowserRouter, Routes, Route } from 'react-router'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="figuras-planas">
          <Route index element={<FlatFigures />} />
          <Route path="cuadrado" element={<Square />} />
          <Route path="rectangulo" element={<Rectangle />} />
        </Route>
        <Route path="figuras-solidas">
          <Route index element={<SolidFigures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
