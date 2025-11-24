import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img 
            src="/trainer.webp" 
            alt="Тренер" 
            className="about__image"
          />
        </div>
        
        <div className="about__content">
          <span className="about__number">01</span>
          <h2 className="about__title">О ТРЕНИРОВКАХ</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id imperdiet justo elementum accumsan arcu. In hac habitasse platea dictumst Rudia vel massa risus Etiam feugiat commodo leo, eget malesuada magna hendrerit eu.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
