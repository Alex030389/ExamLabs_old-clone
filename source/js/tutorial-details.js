$('.trainig-course-general__download-tut-details-page').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: false
            }
        }
    ]
});

var swiper3 = new Swiper('.s4', {
    slidesPerView: 3,
    pagination: {
        clickable: false
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 3,
        },
        414: {
            slidesPerView: 3,
        },
        375: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 3,
        }
});

$(document).ready(function(){

    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10);

        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
                $(this).addClass('selected');
            }
            else {
                $(this).removeClass('hover');
                $(this).removeClass('selected');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });

    $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10);
        var stars = $(this).parent().children('li.star');

        for (var i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (var i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
});
