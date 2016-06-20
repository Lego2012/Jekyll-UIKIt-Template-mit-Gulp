var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatHead;

/**
 * Generate head.js and include the following files
 */
gulp.task('scriptsHead', function() {
  return gulp.src(config.src)
    .pipe(order([
      // Hier wird die Reihenfolge des Imports festgelegt. Die auskommentierten Dateien dienen als Beispiel (bei mehreren Dateien die Kommas am Ende der Zeilen nicht vergessen!)
      "modernizr.js"
      //"datei3.js"
      //"datei2.js"
    ]))
    .pipe(concat('head.js'))
    .pipe(gulp.dest(config.dest));
});
