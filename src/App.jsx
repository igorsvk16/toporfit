import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WhoIsJohn from './components/WhoIsJohn/WhoIsJohn'
import About from './components/About/About'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <WhoIsJohn />
      <About />
      <div className='container'></div>
    </>
  )
}

export default App
