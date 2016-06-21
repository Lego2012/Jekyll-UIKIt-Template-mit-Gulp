var gulp         = require('gulp');
var concat       = require('gulp-concat');
var order        = require('gulp-order');
var config       = require('../../config').concatFoot;

/**
 * Erzeuge die footer.js und inkludiere die folgenden Dateien
 */
gulp.task('scriptsFoot', function() {
  return gulp.src(config.src)
    .pipe(order([
      // Hier werden die Dateien in der gewünschten Reihenfolge eingetragen
      // Nicht vergessen, die Kommas richtig zu setzen!
      "jquery.js",
      "uikit.js",
      "grid.js"
      //"datei5.js",
      //"datei2.js",
      //"datei3.js"
    ]))
    .pipe(concat('foot.js'))
    .pipe(gulp.dest(config.dest));
});
