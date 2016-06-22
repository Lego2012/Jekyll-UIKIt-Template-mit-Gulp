var gulp         = require('gulp');
require('gulp-grunt')(gulp);

/**
 * Erzeuge CSS von SCSS
 * Erstelle Sourcemaps
 */
 gulp.task('gruntSass', [
   'grunt-sass'
 ]);
