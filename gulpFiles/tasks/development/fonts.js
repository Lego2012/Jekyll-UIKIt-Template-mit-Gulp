var gulp        = require('gulp');
var config      = require('../../config').fonts.development;

// Copy fonts to build folder
gulp.task('fonts:development', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
