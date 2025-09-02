import ThemeContextProvider from './context/ThemeContextProvider'
import Routing from './router/Routing'

function App() {
  return (
    <div className="min-h-full flex flex-col justify-between gap-4 text-slate-800 dark:text-white">
      <ThemeContextProvider>
        <Routing />
      </ThemeContextProvider>
    </div>
  )
}

export default App
