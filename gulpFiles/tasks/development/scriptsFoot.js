var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatFoot;

/**
 * Generate footer.js and include the following files
 */
gulp.task('scriptsFoot', function() {
  return gulp.src(config.src)
    .pipe(order([
      "jquery.js",
      "cycle2.js",
      "uikit.js",
      "grid.js",
      "sticky.js",
      "accordion.js",
      "parallax.js"
    ]))
    .pipe(concat('foot.js'))
    .pipe(gulp.dest(config.dest));
});
