var gulp         = require('gulp');
var rename       = require('gulp-rename');
var config       = require('../../config').animate;

gulp.task('animate', function() {
    return gulp.src(config.src)
      .pipe(rename('_animate.scss'))
      .pipe(gulp.dest(config.dest));
});
