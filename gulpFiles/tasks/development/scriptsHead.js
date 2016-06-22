var gulp         = require('gulp');
var concat       = require('gulp-concat');
var config       = require('../../config').concatHead;

/**
 * Erzeuge head.js und inkludiere die folgenden Dateien
 */
gulp.task('scriptsHead', function() {
  return gulp.src(config.src)
    .pipe(concat('head.js'))
    .pipe(gulp.dest(config.dest));
});
