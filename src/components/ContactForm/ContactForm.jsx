import './ContactForm.css'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Как поднять свой уровень физической подготовки?',
      answer: 'Регулярные тренировки с персональным тренером, правильное питание и достаточный отдых - ключевые факторы для повышения вашего уровня физической подготовки.'
    },
    {
      id: 2,
      question: 'Какие услуги мы предлагаем?',
      answer: 'Персональные тренировки, составление индивидуальных программ питания, онлайн-консультации, групповые занятия и фитнес-тестирование.'
    },
    {
      id: 3,
      question: 'Когда взимается плата за услугу?',
      answer: 'Оплата производится в начале каждого месяца или после каждой тренировки - в зависимости от выбранного вами пакета услуг.'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.')
    
    // Очистка формы после отправки
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="contact-form" id="contact">
      <div className="contact-form__container">
        <div className="contact-form__content">
          <div className="contact-form__number">04</div>
          <h2 className="contact-form__title">
            ХВАТИТ МЕЧТАТЬ.
            <br />
            НАЧНИ ДЕЙСТВОВАТЬ.
          </h2>

          <div className="contact-form__faqs">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`contact-form__faq ${openFaq === faq.id ? 'contact-form__faq--open' : ''}`}
              >
                <button 
                  className="contact-form__faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  {faq.question}
                  <span className="contact-form__faq-icon">
                    {openFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="contact-form__faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form__form-wrapper">
          <form className="contact-form__form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="firstName" className="contact-form__label">
                  Имя
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="contact-form__input"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="lastName" className="contact-form__label">
                  Фамилия
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="contact-form__input"
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="email" className="contact-form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone" className="contact-form__label">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="contact-form__input"
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="message" className="contact-form__label">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-form__textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-form__submit">
              <span>ОТПРАВИТЬ</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
