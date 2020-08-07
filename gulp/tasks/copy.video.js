'use strict';

module.exports = function() {
    $.gulp.task('copy:video', function() {
        return $.gulp.src('./source/video/**/*.*', { since: $.gulp.lastRun('copy:video') }) //копируем только вновь добавленные video
            .pipe($.gulp.dest($.config.root + '/assets/video')); // путь к итоговой папке
    });
};