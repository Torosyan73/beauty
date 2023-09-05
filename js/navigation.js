const btnOpenMobileNav = document.querySelector('.btn-open-mobile-nav');
const btnCloseMobileNav = document.querySelector('.btn-close-mobile-nav');
const navListWrapper = document.querySelector('.nav__list-wrapper');
const navLink = document.querySelectorAll('.nav__link');
const body = document.body;

btnOpenMobileNav.addEventListener('click', function() {  
    navListWrapper.classList.add('nav__list-wrapper--show');
    body.classList.add('modal-open');
});

btnCloseMobileNav.addEventListener('click', function() {
    navListWrapper.classList.remove('nav__list-wrapper--show');
    body.classList.remove('modal-open');
});