import Header from './components/organisms/Header'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {
  return (
    <div className="min-h-full flex flex-col justify-between">
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    </div>
  )
}

export default App
