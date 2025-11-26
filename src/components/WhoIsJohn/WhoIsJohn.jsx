import './WhoIsJohn.css'

function WhoIsJohn() {
  return (
    <section className="who-is-john" id="who-is-john">
      <div className="who-is-john__container">
        <div className="who-is-john__image-wrapper">
          <div className="who-is-john__rotating-text">
            <svg viewBox="0 0 200 200" className="who-is-john__circle">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text className="who-is-john__circle-text">
                <textPath href="#circlePath">
                  TOPORFIT • TOPORFIT • TOPORFIT • 
                </textPath>
              </text>
            </svg>
          </div>
          <img 
            src="/trainer1.webp" 
            alt="Иван - персональный тренер" 
            className="who-is-john__image"
          />
        </div>
        
        <div className="who-is-john__content">
          <h2 className="who-is-john__title">КТО Я?</h2>
          <p className="who-is-john__text">
            Как увлечённый персональный тренер, я верю в то, что могу помочь каждому достичь своих фитнес-целей через персонализированный коучинг и поддержку.
          </p>
          
          <div className="who-is-john__stats">
            <div className="who-is-john__stat">
              <div className="who-is-john__stat-number">100+</div>
              <div className="who-is-john__stat-label">Довольных клиентов</div>
            </div>
            
            <div className="who-is-john__stat">
              <div className="who-is-john__stat-number">5</div>
              <div className="who-is-john__stat-label">Лет опыта</div>
            </div>
            
            <div className="who-is-john__stat">
              <div className="who-is-john__stat-number">20</div>
              <div className="who-is-john__stat-label">Лет в спорте</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoIsJohn
