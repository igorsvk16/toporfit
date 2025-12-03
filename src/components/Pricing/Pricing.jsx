import './Pricing.css'

function Pricing() {
  const packages = [
    {
      id: 1,
      name: '1 Тренировка',
      price: '2000',
      period: 'за тренировку',
      features: [
        'Составление программы тренировок',
        'Ответы на вопросы',
        'Отслеживание питания',
        'Индивидуальный подход'
      ],
      isPopular: false
    },
    {
      id: 2,
      name: '8 Тренировок',
      price: '14000',
      period: 'за месяц',
      features: [
        'Составление программы тренировок',
        'Ответы на вопросы',
        'Отслеживание питания',
        'Индивидуальный подход',
        'Бесплатная консультация',
        'План питания'
      ],
      isPopular: true
    },
    {
      id: 3,
      name: '12 Тренировок',
      price: '20000',
      period: 'за месяц',
      features: [
        'Составление программы тренировок',
        'Ответы на вопросы',
        'Отслеживание питания',
        'Индивидуальный подход',
        'Бесплатная консультация',
        'План питания',
        'Доступ к онлайн-курсам'
      ],
      isPopular: false
    }
  ]

  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container">
        <span className="pricing__label">Цены</span>
        <h2 className="pricing__title">Наши пакеты</h2>
        
        <div className="pricing__cards">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`pricing__card ${pkg.isPopular ? 'pricing__card--popular' : ''}`}
            >
              {pkg.isPopular && (
                <div className="pricing__badge">Популярный</div>
              )}
              
              <h3 className="pricing__package-name">{pkg.name}</h3>
              
              <div className="pricing__price-wrapper">
                <span className="pricing__price">{pkg.price}₽</span>
                <span className="pricing__period">{pkg.period}</span>
              </div>
              
              <ul className="pricing__features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="pricing__feature">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#2B3F72"/>
                      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="pricing__button">Купить</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
