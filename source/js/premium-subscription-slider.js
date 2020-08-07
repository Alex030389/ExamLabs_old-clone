$('.content-microsoft__right-list').slick({
    centerMode: true,
    centerPadding: '75px',
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerMode: false,
                centerPadding: '0',
                variableWidth: false
            }
        }
    ]
});

$('.reseller-slider').slick({
    centerMode: true,
    centerPadding: '9.3%',
    slidesToShow: 1,
    accessibility: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                centerPadding: '7%',
                arrows: false
            }
        }
    ]
});

(function () {
    var buttonElement = document.querySelector('.button-to-top');

    window.utils = {
      scrollTop: function () {
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
          window.scrollBy(0,((top+10)/-20));
          var t = setTimeout('utils.scrollTop()',10);
        } else clearTimeout(t);
        return false;
      }
    };

  var onPageScroll = function () {
    if(document.documentElement.scrollTop >= innerHeight * 0.6) {
      buttonElement.classList.add('button-to-top--visible');
    } else {
      buttonElement.classList.remove('button-to-top--visible');
    }
  };
  
  if (buttonElement) {
    buttonElement.addEventListener('click', window.utils.scrollTop);
    document.addEventListener('scroll', onPageScroll);
  }
})();