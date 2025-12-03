import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WhoIsJohn from './components/WhoIsJohn/WhoIsJohn'
import About from './components/About/About'
import Pricing from './components/Pricing/Pricing'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoIsJohn />
      <About />
      <Pricing />
      <Reviews />
      <div className='container'></div>
    </>
  )
}

export default App
