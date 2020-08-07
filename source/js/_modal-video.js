// var player = new Plyr('#player');


// $('.modal-video__left-element').on("click", function() {
//   var player = videojs('#player');
//   player.pause();
//   var new_url = $(this).attr("data-u");
//   player.src(new_url);
//   // set src track corresponding to new movie //
//   player.load();
//   player.play();
// });




// player.on('ended', function () {
//     var next = $('.modal-video__left-element.modal-video__left-element--active').closest('.modal-video__right-item').next();
//     if (next) {
//         next.find('.modal-video__left-element').trigger('click');
//     }
// });

$('.modal-video__left-element').on('click', function () {
    var player = videojs('player');
    var self = $(this);
    var url = self.data('u');

    if (self.closest('.modal-video__right-item').hasClass('modal-video__right-item--active'))
        return false;

    $('.modal-video__left-element').removeClass('modal-video__left-element--active');
    $('.modal-video__right-item').removeClass('modal-video__right-item--active');
    self.addClass('modal-video__left-element--active');
    self.closest('.modal-video__right-item').addClass('modal-video__right-item--active');

    player.pause();
    player.src(url + '#.mp4');
    player.load();
    player.play();
});
