import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title-fill">TOPORFIT</h1>
        <img 
          src="/trainer.webp" 
          alt="Тренер" 
          className="hero__image"
        />
        <h1 className="hero__title-stroke">TOPORFIT</h1>
      </div>
    </section>
  )
}

export default Hero
