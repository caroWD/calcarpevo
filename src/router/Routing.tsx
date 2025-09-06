import { FlatFigures, Home, SolidFigures } from '@/pages/index'
import {
  Rectangle,
  Square,
  Triangle,
  Diamond,
  Parallelogram,
  Trapeze,
  Polygon,
  Circle,
} from '@/pages/flat-figures'
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
          <Route path="triangulo" element={<Triangle />} />
          <Route path="rombo" element={<Diamond />} />
          <Route path="paralelogramo" element={<Parallelogram />} />
          <Route path="trapecio" element={<Trapeze />} />
          <Route path="poligono" element={<Polygon />} />
          <Route path="circulo" element={<Circle />} />
        </Route>
        <Route path="figuras-solidas">
          <Route index element={<SolidFigures />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
