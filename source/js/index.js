import { CompositeDisposable } from "rx";
import { max } from "moment";

// how it works pop-up
$('#howItWorks').click(function (e) {
    e.preventDefault();
    $('.modal-how-it-works').toggleClass('modal-how-it-works--active');
    $('#hide').css('display', 'none');
    $('#body').toggleClass('body--active');
    return false;
});

$('#closeButton').click(function () {
    $('.modal-how-it-works').removeClass('modal-how-it-works--active');
    $('#hide').css('display', 'block');
    $('#hide').removeAttr('style');
    $('#body').removeClass('body--active');
});

$('.button-close-responsive').click(function () {
    $('.modal-how-it-works').removeClass('modal-how-it-works--active');
    $('#hide').css('display', 'block');
    $('#hide').removeAttr('style');
    $('#body').removeClass('body--active');
})

$('#closeModal').click(function (e) {
    e.preventDefault();
    $('.modal-how-it-works').removeClass('modal-how-it-works--active');
    $('#hide').css('display', 'block');
    $('#hide').removeAttr('style');
    $('#body').removeClass('body--active');
});

// sidebar click how it works modal
$('#howItWorksResponsive').click(function () {
    $('.modal-how-it-works').toggleClass('modal-how-it-works--active');
    $('#hide').css('display', 'none');
    $('#body').css('overlow', 'hidden');
});

// upload file
$("#files").change(function() {
    filename = this.files[0].name;
});

// slick responsive slider
$('.trainig-course-general__vendor').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// swiper slider index page s1
var swiper2 = new Swiper('.swiper1', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  });

// s8
var swiper = new Swiper('.s8', {
    slidesPerView: 'auto',
    loop: false,
    pagination: {
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// navigation slider
var swiper = new Swiper('.s2', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
// 3-rd slider mobile index page
var swiper3 = new Swiper('.s3', {
    slidesPerView: 'auto',
    spaceBetween: 45,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
          spaceBetween: 0,
      }
    }
});

$(window).resize(function () {
    if(window.innerWidth >= '768') {
        $('#body').removeClass('body--active');
        $('#searchWrapper').removeClass('search-responsive-wrapper--active');
        $('.header-search-element').addClass('visually-hidden');
        $('#body').removeClass('body--active');
    };
});

let informationIinputLine = document.getElementById('informationIinputLine');

// search form
$('#search-element').click(function () {
    $('.header-search-element').toggleClass('visually-hidden');
    informationIinputLine.focus();
});

//nav slider
$('.practice__navigation-list').slick({
    arrows: false,
    infinite: false,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
            }
        }
    ]
});

let subscriptionList = document.querySelector('.subscription__list');
let item = document.querySelectorAll('.subscription__item');
let priceItem = document.querySelectorAll('.price-item');

// data attributes item 

for (let i = 0; i < item.length; i++) {

    item[i].addEventListener('click', e => {

        e.currentTarget.classList.toggle('subscription__item--active');

        for (let i = 0; i < item.length; i++) {
            if (item[i] !== e.currentTarget & item[i].className === 'subscription__item subscription__item--active') {
                item[i].classList.remove('subscription__item--active');
            }
        }
    });
}

$(item).on('click', function() {
    let oldPrice = $(this).find('.subscription__item-price-old').data('old');

    $('.total-due__left-old-price h4').text(oldPrice);

    let currentPrice = $(this).find('.subscription__item-price-wrap').data('current');

    $('.total-due__left-current-price h4').text(currentPrice);

    let discount = Math.floor(currentPrice - oldPrice);

    $('.total-due__left-label-text h4').text(discount);
});


var swiper = new Swiper('.s7', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next-elem',
        prevEl: '.swiper-button-prev-elem',
      },
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 10,
      modifier: 2,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const inputCopy = document.getElementById('inputCopy');
  const buttonCopy = document.getElementById('buttonCopy');

  if (buttonCopy) {
    buttonCopy.addEventListener('click', e => {
        e.preventDefault();
  
        inputCopy.select();
  
        document.execCommand("Copy");
  
       (buttonCopy.innerHTML === 'Copy') ? buttonCopy.innerHTML = 'Copy' : buttonCopy.innerHTML = 'Copied';
    });  
  }
 
    // let ctx = document.getElementById("canvas").getContext("2d");
    // let myLine = new Chart(ctx, config);

  window.chartColors = {
    orange: 'rgb(248, 140, 61)'
  };
  
  var week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var config = {
    type: 'line',
    data: {
      labels: week,
      datasets: [{
        pointRadius: 7,
        pointHoverRadius: 7,
        pointBackgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        fill: false,
        data : [0, 199, 99, 150, 305, 247, 100]
      }]
    },
    options: {
      legend: {
            display: false,
      },
      responsive: true,
      tooltips: {
        intersect: false,
      },
     hover: {
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
          },
        }]
      }
    }
  };
  
  // select chart 
  $('#chart').select2({
    placeholder: 'Select an option'
  });

  // swiper s9 
  var swiper = new Swiper('.s9', {
    slidesPerView:'auto',
    spaceBetween: 45,
    watchOverflow: true,
    setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-s9',
        prevEl: '.swiper-button-prev-s9',
    },
    breakpoints: {
        480: {
            spaceBetween: 25,
        }
    }
});

$('.gallery').each(function(e) { 
    $(this).magnificPopup({
        delegate: 'a', 
        type: 'image',
        fixedContentPos: false,
        gallery: {
          enabled:true
        }
    });
});

const userSidebar = document.getElementById('userSidebar');
const userPic = document.getElementById('userPic');

const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

if (userPic) {
    userPic.addEventListener('click', e => {
        e.preventDefault();
    
        userSidebar.classList.toggle('user-sidebar--active');
        body.classList.toggle('body--modal');
    });    
}

if (userSidebar) {
    window.addEventListener('resize', () => {
        if (innerWidth >= 768) {
            userSidebar.classList.remove('user-sidebar--active');
            sidebar.classList.remove('animated-sidebar--active');
            body.classList.remove('body--modal');
        }
    });
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', e => {
        body.classList.toggle('body--modal');
    
        sidebar.classList.toggle('animated-sidebar--active');
    });
}

const convincedLink = document.querySelector('.convinced');
const notConvincedPopup = document.querySelector('.not-convinced');
const closeElem = document.querySelector('.close-elem');

if (convincedLink) {
    convincedLink.addEventListener('click', e => {
        e.preventDefault();
    
        notConvincedPopup.classList.toggle('not-convinced--active');
        body.classList.toggle('body--modal');
    });    
}

if (closeElem) {
    closeElem.addEventListener('click', e => {
        e.preventDefault();
    
        notConvincedPopup.classList.remove('not-convinced--active');
        body.classList.remove('body--modal');
        body.removeAttribute('class');
    });    
}

const closeSidebar = document.querySelector('.close-sidebar');

if (closeSidebar) {
    closeSidebar.addEventListener('click', e => {
        sidebar.classList.remove('animated-sidebar--active');
        body.classList.remove('body--modal');
    });
}
