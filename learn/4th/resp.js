burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navItem = document.querySelector('.nav-item')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp')
    navItem.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})