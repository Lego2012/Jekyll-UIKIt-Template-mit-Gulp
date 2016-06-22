var gulp         = require('gulp');
var concat       = require('gulp-concat');
var config       = require('../../config').concatFoot;

/**
 * Erzeuge die footer.js und inkludiere die folgenden Dateien
 */
gulp.task('scriptsFoot', function() {
  return gulp.src(config.src)
    .pipe(concat('foot.js'))
    .pipe(gulp.dest(config.dest));
});
