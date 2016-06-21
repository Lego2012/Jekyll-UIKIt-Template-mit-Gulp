var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatHead;

/**
 * Erzeuge head.js und inkludiere die folgenden Dateien
 */
gulp.task('scriptsHead', function() {
  return gulp.src(config.src)
    .pipe(order([
      // Hier werden die Dateien in der gewünschten Reihenfolge eingetragen
      // Nicht vergessen, die Kommas richtig zu setzen!
      "modernizr.js"
      //"datei5.js",
      //"datei2.js",
      //"datei3.js"
    ]))
    .pipe(concat('head.js'))
    .pipe(gulp.dest(config.dest));
});
