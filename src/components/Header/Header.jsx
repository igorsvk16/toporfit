import './Header.css'
import { useState, useEffect } from 'react'

function Header() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDark(false)
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
    } else {
      setIsDark(true)
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
      localStorage.setItem('theme', 'light')
    }
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

        <div className="header__theme-switcher">
          <label className="theme-switch" aria-label="Переключить тему">
            <input 
              type="checkbox" 
              checked={isDark} 
              onChange={toggleTheme}
            />
            <span className="theme-slider"></span>
          </label>
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
