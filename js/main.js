const menu = document.querySelector('.menu');
const line = document.querySelectorAll('.line');
navWrapper = document.querySelector('.nav__wrapper');
navList = navWrapper.querySelector('.nav__list');

menu.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
    line[0].classList.toggle('active');
    line[1].classList.toggle('active');
    line[2].classList.toggle('active');
});

const body = document.querySelector('body');

let loader = document.createElement('ASIDE');
body.appendChild(loader);
loader.classList.add('loader');

let loaderContent = document.createElement('DIV');
loader.appendChild(loaderContent);
loaderContent.classList.add('loader-content');

let loaderLogo = document.createElement('H1');
loaderContent.appendChild(loaderLogo);
loaderLogo.classList.add('loader-logo');
loaderLogo.innerHTML = "Sweet 'n Spicy";

let loadingBall = document.createElement('DIV');
loaderContent.appendChild(loadingBall);
loadingBall.classList.add('loading-ball');

setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 400);
}, 2000);
