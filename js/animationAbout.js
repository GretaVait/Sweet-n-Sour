const imgWrapper = document.querySelectorAll('.img-wrapper');
const introHeading = document.querySelector('.about--bg .display1');
const aboutWrapper = document.querySelector('.about__wrapper');
const goalWrapper = document.querySelector('.goal__wrapper');

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

window.addEventListener('scroll', ()=>{
    grow(imgWrapper[0]);
    grow(imgWrapper[1]);
    fadeIn(aboutWrapper);
    fadeIn(goalWrapper);
});

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        fadeIn(introHeading);
    }, 1800);
});