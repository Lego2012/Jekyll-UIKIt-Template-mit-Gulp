var gulp    = require('gulp');
var collect = require('gulp-rev-collector');
var config  = require('../../config').collect;

/**
 * Ersetze alle Links zu Assets in Dateien
 * von einer Manifest Datei
 */
gulp.task('rev:collect', function() {
  return gulp.src(config.src)
  .pipe(collect())
  .pipe(gulp.dest(config.dest));
});
