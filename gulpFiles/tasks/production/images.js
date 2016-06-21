var gulp        = require('gulp');
var config      = require('../../config').images.production;

/**
 * Kopiere die Bilder in den Build-Ordner
 */
gulp.task('images:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
