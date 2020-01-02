const imgWrapper = document.querySelector('.img-wrapper');
const menuSelect = document.querySelector('.menu--intro');
const introHeading = document.querySelector('.intro--bg .display1');
const aboutWrapper = document.querySelector('.about__wrapper');

function grow(section) {
    if (window.pageYOffset >= section.offsetTop - 600) {
        section.classList.add('active');
    }
}

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 600) {
        section.style.opacity = '1';
        section.style.transform = 'translate(0, 0)';
    }
}

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        fadeIn(introHeading);
    }, 1800);
});

window.addEventListener('scroll', ()=>{
    grow(imgWrapper);
    fadeIn(menuSelect);
    fadeIn(aboutWrapper);
});