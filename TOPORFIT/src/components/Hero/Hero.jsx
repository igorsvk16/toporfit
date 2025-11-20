import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <img 
          src="../../src/assets/trainer.jpg" 
          alt="Тренер" 
          className="hero__image"
        />
        <h1 className="hero__title">TOPORFIT</h1>
      </div>
    </section>
  )
}

export default Hero
