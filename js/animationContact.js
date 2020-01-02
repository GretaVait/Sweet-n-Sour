const reserve = document.querySelector('.reserve__info');
const informationOverlay = document.querySelector('.white--overlay');

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 600) {
        section.style.opacity = '1';
        section.style.transform = 'translate(0, 0)';
    }
}

function grow(section) {
    if (window.pageYOffset >= section.offsetTop - 600) {
        section.style.width = '0%';
    }
}

window.addEventListener('load', ()=>{
    setTimeout(()=>{
        fadeIn(reserve);
        grow(informationOverlay);
    }, 1800);
});

$(function() {
    $('input[name="dates"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2019,
      maxYear: 2020,
      timePicker: true,
      locale: {
        format: 'YYYY/M/DD hh:mm A'
      }
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
    });
});

const guests = document.querySelector('.guests');
const guestInput = document.querySelector('input[name="guest"]');
const guestItem = document.querySelectorAll('.guests__item');

guestInput.addEventListener('click', ()=>{
    guests.style.display = 'block';
});


for (let i = 0; i < guestItem.length; i++) {
    guestItem[i].addEventListener('click', ()=>{
        guestInput.value = guestItem[i].innerText;
        guests.style.display = 'none';
    });
}

body.addEventListener('click', (e)=>{
    if (e.target != guestInput) {
        guests.style.display = 'none';
    }
});