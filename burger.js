const hamburger = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav__container')
hamburger.addEventListener('click', () => {
     nav_menu.classList.toggle('is-active')
})
