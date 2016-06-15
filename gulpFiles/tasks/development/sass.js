var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config').sass;

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
 gulp.task('sass', function () {
   return gulp.src(config.src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(sass({includePaths: [
         'app/_assets/scss/partials',
         'app/_assets/scss/vendor',
         'bower_components/uikit/scss',
         'bower_components/uikit/scss/components/',
         'bower_components/juice/dist'
      ]}).on('error', sass.logError))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.dest));
 });
