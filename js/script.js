//Menu toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
// Slide carrosel dos serviços
var swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    410: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 2,
    },
  },
})

//Slide carrossel dos depoimentos
var swiper1 = new Swiper('.swiper1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  initialSlide: 2
})

//Botão de voltar ao topo da página
document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn')

  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = 'block'
    } else {
      scrollToTopBtn.style.display = 'none'
    }
  })

  scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0 // Para navegadores mais antigos
    document.documentElement.scrollTop = 0 // Para navegadores modernos
  })
})

//Deixando o HEADER fixo quando navego na página
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header')
  var offsetThreshold = 100 // Ajuste este valor conforme necessário

  window.addEventListener('scroll', function () {
    if (window.scrollY > offsetThreshold) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })
})

// Animando todos os elementos da página
window.sr = ScrollReveal({ reset: true })

sr.reveal('#home', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('#services', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('.text-about', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '10rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('.img-doutor', {
  origin: 'left', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('.informacoes-doutor', {
  origin: 'right', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('.about', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('#depoimentos', {
  origin: 'top', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})

sr.reveal('#contato', {
  origin: 'bottom', // Define a origem da animação para a esquerda
  distance: '20rem', // Define a distância de deslocamento
  duration: 900,
  easing: 'ease-out' // Pode ajustar a curva de animação conforme necessário
})
