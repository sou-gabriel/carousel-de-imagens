const carouselButtonNext = document
  .querySelector('[data-js="carousel__button--next"]')
const carouselButtonPrev = document
  .querySelector('[data-js="carousel__button--prev"]')
const carouselItems = document.querySelectorAll('[data-js="carousel__item"]')

let currentItemIndex = 0

carouselButtonNext.addEventListener('click', () => {
  // Esconder todos os slides
  carouselItems.forEach(item => {
    item.classList.remove('carousel__item--visible')
    item.classList.add('carousel__item--hidden')
  })


  // Mostrar próximo slide
  if (carouselItems.length - 1 === currentItemIndex) {
    currentItemIndex = 0
    carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
    carouselItems[currentItemIndex].classList.add('carousel__item--visible')
    return
  } 

  currentItemIndex++
  carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
  carouselItems[currentItemIndex].classList.add('carousel__item--visible')  
})

carouselButtonPrev.addEventListener('click', () => {
  // Esconder todos os slides
  carouselItems.forEach(item => {
    item.classList.remove('carousel__item--visible')
    item.classList.add('carousel__item--hidden')
  })

  // Mostrando o slide anterior
  if (currentItemIndex === 0) {
    currentItemIndex += 2
    carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
    carouselItems[currentItemIndex].classList.add('carousel__item--visible')  
    return
  }

  currentItemIndex--
  carouselItems[currentItemIndex].classList.remove('carousel__item--hidden')
  carouselItems[currentItemIndex].classList.add('carousel__item--visible') 
})