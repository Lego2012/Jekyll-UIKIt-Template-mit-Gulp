var gulp        = require('gulp');
var config      = require('../../config').fonts.production;

// Kopiere die Fonts in den Build-Ordner
gulp.task('fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
