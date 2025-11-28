import './Reviews.css'
import { useState } from 'react'

function Reviews() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [currentReview, setCurrentReview] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const reviews = [
    {
      id: 1,
      name: 'Александр',
      age: '28 лет',
      result: 'Сбросил 15 кг за 3 месяца',
      text: 'Отличный тренер! Помог не только похудеть, но и научил правильному питанию. Результат превзошёл все ожидания!',
      beforeImage: '/Screenshot 2025-11-26 103534.png',
      afterImage: '/Screenshot 2025-11-26 103612.png'
    },
    {
      id: 2,
      name: 'Мария',
      age: '32 года',
      result: 'Набрала мышечную массу',
      text: 'Всегда мечтала о подтянутой фигуре. С Игорем достигла своей цели за 4 месяца. Рекомендую!',
      beforeImage: '/Screenshot 2025-11-26 103534.png',
      afterImage: '/Screenshot 2025-11-26 103612.png'
    },
    {
      id: 3,
      name: 'Дмитрий',
      age: '35 лет',
      result: 'Улучшил общую физическую форму',
      text: 'Индивидуальный подход и постоянная мотивация - это то, что помогло мне не сдаться и дойти до конца!',
      beforeImage: '/Screenshot 2025-11-26 103534.png',
      afterImage: '/Screenshot 2025-11-26 103612.png'
    }
  ]

  const handleSliderMove = (e) => {
    if (!isDragging) return
    const container = e.currentTarget.closest('.reviews__comparison')
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const container = e.currentTarget.closest('.reviews__comparison')
    const rect = container.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
    setSliderPosition(50)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
    setSliderPosition(50)
  }

  const review = reviews[currentReview]

  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <h2 className="reviews__title">Результаты моих клиентов</h2>
        <p className="reviews__subtitle">До и после тренировок</p>

        <div className="reviews__content">
          <div 
            className="reviews__comparison"
            onMouseMove={handleSliderMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Before Image (фон) */}
            <div className="reviews__image-container">
              <img 
                src={review.beforeImage} 
                alt="До тренировок" 
                className="reviews__image reviews__image--before"
              />
              <span className="reviews__label reviews__label--before">ДО</span>
            </div>

            {/* After Image (с маской) */}
            <div 
              className="reviews__image-container reviews__image-container--after"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={review.afterImage} 
                alt="После тренировок" 
                className="reviews__image reviews__image--after"
              />
              <span className="reviews__label reviews__label--after">ПОСЛЕ</span>
            </div>

            {/* Slider */}
            <div 
              className="reviews__slider"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="reviews__slider-line"></div>
              <div 
                className="reviews__slider-handle"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="reviews__info">
            <div className="reviews__card">
              <h3 className="reviews__name">{review.name}</h3>
              <p className="reviews__age">{review.age}</p>
              <p className="reviews__result">{review.result}</p>
              <p className="reviews__text">"{review.text}"</p>
            </div>

            <div className="reviews__navigation">
              <button 
                className="reviews__nav-btn reviews__nav-btn--prev" 
                onClick={prevReview}
                aria-label="Предыдущий отзыв"
              >
                ←
              </button>
              <div className="reviews__dots">
                {reviews.map((_, index) => (
                  <span 
                    key={index}
                    className={`reviews__dot ${index === currentReview ? 'reviews__dot--active' : ''}`}
                    onClick={() => {
                      setCurrentReview(index)
                      setSliderPosition(50)
                    }}
                  />
                ))}
              </div>
              <button 
                className="reviews__nav-btn reviews__nav-btn--next" 
                onClick={nextReview}
                aria-label="Следующий отзыв"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
