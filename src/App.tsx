import { ThemeContextProvider } from './context/index'
import Routing from './router/Routing'

function App() {
  return (
    <div className="min-h-full flex flex-col justify-between gap-4 text-slate-800 dark:text-white max-w-md mx-auto">
      <ThemeContextProvider>
        <Routing />
      </ThemeContextProvider>
    </div>
  )
}

export default App
