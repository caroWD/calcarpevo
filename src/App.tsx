import Header from './components/organisms/Header'
import MainNav from './components/organisms/MainNav'
import SecondNav from './components/organisms/SecondNav'

function App() {
  return (
    <div className="min-h-full flex flex-col justify-between">
      <Header />
      <MainNav />
      <SecondNav />
    </div>
  )
}

export default App
