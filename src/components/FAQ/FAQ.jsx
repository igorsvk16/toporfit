import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Сколько длится одна тренировка?',
      answer: 'Продолжительность тренировки составляет 60 минут. Это оптимальное время для эффективной работы над вашими целями без перетренированности.'
    },
    {
      question: 'Нужно ли мне специальное оборудование?',
      answer: 'Нет, всё необходимое оборудование есть в зале. Вам понадобится только удобная спортивная форма и обувь.'
    },
    {
      question: 'Как быстро я увижу результаты?',
      answer: 'Первые результаты вы заметите уже через 2-3 недели регулярных тренировок. Значительные изменения обычно происходят через 2-3 месяца при соблюдении программы тренировок и питания.'
    },
    {
      question: 'Можно ли заниматься при травмах?',
      answer: 'При наличии травм или хронических заболеваний необходима консультация врача. Я смогу адаптировать программу под ваши особенности, но медицинское разрешение обязательно.'
    },
    {
      question: 'Что включает в себя план питания?',
      answer: 'План питания включает расчет калорий, соотношение БЖУ, рекомендации по продуктам и примерное меню на неделю. Всё адаптируется под ваши цели и предпочтения.'
    },
    {
      question: 'Можно ли отменить или перенести тренировку?',
      answer: 'Да, вы можете перенести тренировку, предупредив меня за 24 часа. При более позднем уведомлении тренировка будет засчитана как проведенная.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <h2 className="faq__title">Часто задаваемые вопросы</h2>
        <p className="faq__subtitle">Ответы на популярные вопросы</p>
        
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <h3 className="faq__question-text">{faq.question}</h3>
                <div className="faq__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M19 9L12 16L5 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="faq__answer">
                <p className="faq__answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
