import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/" aria-label="Главная страница">
            TOPORFIT
          </a>
        </div>
        
        <nav className="header__nav" aria-label="Основная навигация">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#about" className="header__link">Обо мне</a>
            </li>
            <li className="header__menu-item">
              <a href="#services" className="header__link">Услуги</a>
            </li>
            <li className="header__menu-item">
              <a href="#contacts" className="header__link">Контакты</a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__btn" aria-label="write">
            Задать вопрос
          </button>
        </div>

        <button 
          className="header__burger" 
          aria-label="Открыть меню"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
