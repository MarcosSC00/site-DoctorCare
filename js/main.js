const navigation = document.getElementById('navigation')
const servicos = document.getElementById('servicos')
const inicio = document.getElementById('inicio')
const sobre = document.getElementById('sobre')
const contato = document.getElementById('contato')
const backBtn = document.getElementById('backToTopButton')
const menu = document.querySelector('.btn-menu')
window.onload = function(){
  window.scrollTo(0,0)
}
window.addEventListener('scroll', onScroll)
function onScroll() {
  showNavOnScroll()
  showBackOnScroll()
  sectionUderline()
}
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackOnScroll() {
  if (scrollY > 500) {
    backBtn.classList.add('show')
  } else {
    backBtn.classList.remove('show')
  }
}

function sectionUderline() {
  if (scrollY >= 744 && scrollY < 1841) {
    servicos.classList.add('underlineSection')
    inicio.classList.remove('underlineSection')
    sobre.classList.remove('underlineSection')
    contato.classList.remove('underlineSection')
  } else if (scrollY >= 0 && scrollY < 744) {
    inicio.classList.add('underlineSection')
    servicos.classList.remove('underlineSection')
    sobre.classList.remove('underlineSection')
    contato.classList.remove('underlineSection')
  } else if (scrollY >= 1841 && scrollY < 2501) {
    sobre.classList.add('underlineSection')
    servicos.classList.remove('underlineSection')
    inicio.classList.remove('underlineSection')
    contato.classList.remove('underlineSection')
  } else if (scrollY >= 2501) {
    contato.classList.add('underlineSection')
    sobre.classList.remove('underlineSection')
    servicos.classList.remove('underlineSection')
    inicio.classList.remove('underlineSection')
  }
}

function changeMenu() {
  menu.classList.toggle('change')
}

function toggleMenu() {
  changeMenu()
  document.body.classList.toggle('menu-expanded')
}

function closeMenu() {
  changeMenu()
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  duration: 2000,
  distance: '30px',
} 
).reveal('#home .txt-home, #home .home-img, #home .stats, #services header, #services .card, #about .img-sobre-nos, #about .txt-sobre-nos, #contact .content-contact, #contact .img-contact')