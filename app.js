const carouselButtonNext = document
  .querySelector('[data-js="carousel__button--next"]')
const carouselButtonPrev = document
  .querySelector('[data-js="carousel__button--prev"]')
const carouselItems = document.querySelectorAll('[data-js="carousel__item"]')

let currentItemIndex = 0

const hideAllSlides = () => {
  carouselItems.forEach(item => {
    item.classList.remove('carousel__item--visible')
    item.classList.add('carousel__item--hidden')
  })
}

const showNextSlide = () => {
  if (carouselItems.length - 1 === currentItemIndex) {
    currentItemIndex = 0
    carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
    carouselItems[currentItemIndex].classList.add('carousel__item--visible')
    return
  } 

  currentItemIndex++
  carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
  carouselItems[currentItemIndex].classList.add('carousel__item--visible')  
}

const showPreviousSlide = () => {
  if (currentItemIndex === 0) {
    currentItemIndex += 2
    carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
    carouselItems[currentItemIndex].classList.add('carousel__item--visible')  
    return
  }

  currentItemIndex--
  carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
  carouselItems[currentItemIndex].classList.add('carousel__item--visible') 
}

carouselButtonNext.addEventListener('click', () => {
  hideAllSlides()
  showNextSlide()
})

carouselButtonPrev.addEventListener('click', () => {
  hideAllSlides()
  showPreviousSlide()
})