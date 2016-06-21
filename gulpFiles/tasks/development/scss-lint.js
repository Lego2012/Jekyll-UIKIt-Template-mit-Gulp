var gulp     = require('gulp');
var scsslint = require('gulp-scss-lint');
var config   = require('../../config').scsslint;

/**
 * Überprüfe SCSS Dateien
 * `gem install scss-lint` benötigt
 */
gulp.task('scsslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint(config.options));
});
