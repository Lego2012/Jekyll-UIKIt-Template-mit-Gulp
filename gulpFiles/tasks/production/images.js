var gulp        = require('gulp');
var config      = require('../../config').images.production;

/**
 * Copy images to build folder
 */
gulp.task('images:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
