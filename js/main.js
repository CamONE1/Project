const navBtn = document.querySelector('.nav-button');
const mblNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function () {
    mblNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
})