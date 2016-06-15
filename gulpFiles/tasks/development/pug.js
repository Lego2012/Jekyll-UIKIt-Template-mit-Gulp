var gulp         = require('gulp');
var pug          = require('gulp-pug');
var config       = require('../../config').pug;

gulp.task('pug', function() {
  return gulp.src(config.src)
    .pipe(pug(config.options))
    .pipe(gulp.dest(config.dest));
});
