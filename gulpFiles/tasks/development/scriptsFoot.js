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
      // Hier wird die Reihenfolge des Imports festgelegt. Die auskommentierten Dateien dienen als Beispiel (bei mehreren Dateien die Kommas am Ende der Zeilen nicht vergessen!)
      "jquery.js"
      //"datei5.js",
      //"datei2.js",
      //"datei1.js"
    ]))
    .pipe(concat('foot.js'))
    .pipe(gulp.dest(config.dest));
});
