var gulp   = require('gulp');
var base64 = require('gulp-base64');
var config = require('../../config').base64;

/**
 * Ersetze URLs in CSS Dateien mit base64 enkodierten Daten
 */
gulp.task('base64', ['sass'], function() {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
