var gulp        = require('gulp');
var config      = require('../../config').fonts.development;

/**
 * Kopiere die Fonts in den Build-Ordner
 */
gulp.task('fonts:development', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
