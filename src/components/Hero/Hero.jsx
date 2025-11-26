import './Hero.css'

function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <h1 className="hero__title-fill">TOPORFIT</h1>
        <img 
          src="/trainer.webp" 
          alt="Тренер" 
          className="hero__image"
        />
        <h1 className="hero__title-stroke">TOPORFIT</h1>
        
        <button 
          className="hero__scroll-btn" 
          onClick={scrollToNext}
          aria-label="Прокрутить вниз"
        >
          <img src="/icons/down.png" alt="Scroll down" />
        </button>
      </div>
    </section>
  )
}

export default Hero
