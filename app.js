const navEl = document.querySelector('nav')
const menuNav = document.querySelector('.menu-nav-img')
const burguerMenuImage = document.getElementById('burguer-menu-image')

menuNav.addEventListener('click', () => {
    navEl.classList.toggle('nav-active')
    if (navEl.style.display == 'block') {
        navEl.style.display = 'none'
        burguerMenuImage.src = "./assets/images/icon-menu.svg"
    }
    else {
        navEl.style.display = 'block'
        burguerMenuImage.src = "./assets/images/icon-menu-close.svg"
    }
})

const menuCheck = () => {
    if (window.matchMedia("(max-width: 65em)").matches) {
        navEl.classList.remove('nav-active')
        navEl.style.display = 'none'
        burguerMenuImage.src = "./assets/images/icon-menu.svg"
    }

    if (window.matchMedia("(min-width: 65em)").matches) {
        navEl.classList.remove('nav-active')
        navEl.style.display = 'block'
    }
}

window.onresize = menuCheck