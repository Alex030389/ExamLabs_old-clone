// training courses responsive image
const picture = document.querySelector('#picture');
const show = document.querySelector('#show');
const responsiveWrapper = document.getElementById('responsiveWrapper');
const closeBtn = document.querySelector('#closeBtn');

if (picture) {
    picture.addEventListener('click', function() {
        show.classList.toggle('block');
        show.style.opacity = 1;
        responsiveWrapper.classList.add('training-course__wrapper--active');
        body.classList.toggle('body--active');
    });

}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        show.classList.toggle('block');
        show.style.opacity = 0;
        responsiveWrapper.classList.remove('training-course__wrapper--active');
        body.classList.remove('body--active');
    });
}

// select
$(document).ready(function() {
    $('.selectize').select2();
});

$(document).ready(function() {
  $('.type-card, .selectize').select2();
});

var swiper = new Swiper('.slider2', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var swiper = new Swiper('.slider3', {
  slidesPerView: 'auto',
  spaceBetween: 45,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
        spaceBetween: 25
    }
  }
});






