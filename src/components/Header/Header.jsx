import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
          className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--active' : ''}`}>
        <nav className="header__mobile-nav">
          <ul className="header__mobile-list">
            <li className="header__mobile-item">
              <a href="#about" className="header__mobile-link" onClick={closeMenu}>Обо мне</a>
            </li>
            <li className="header__mobile-item">
              <a href="#services" className="header__mobile-link" onClick={closeMenu}>Услуги</a>
            </li>
            <li className="header__mobile-item">
              <a href="#contacts" className="header__mobile-link" onClick={closeMenu}>Контакты</a>
            </li>
          </ul>
          <button className="header__mobile-btn" onClick={closeMenu}>
            Задать вопрос
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
