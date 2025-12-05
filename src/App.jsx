import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WhoIsJohn from './components/WhoIsJohn/WhoIsJohn'
import About from './components/About/About'
import Reviews from './components/Reviews/Reviews'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import ContactForm from './components/ContactForm/ContactForm'

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
      <ContactForm />
      <div className='container'></div>
    </>
  )
}

export default App
