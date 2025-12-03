import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WhoIsJohn from './components/WhoIsJohn/WhoIsJohn'
import About from './components/About/About'
import Reviews from './components/Reviews/Reviews'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoIsJohn />
      <About />
      <Reviews />
      <Pricing />
      <FAQ />
      <div className='container'></div>
    </>
  )
}

export default App
