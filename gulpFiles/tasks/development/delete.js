var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').delete;

/**
 * Lösche Dateien und Ordner
 */
gulp.task('delete', function(callback) {
  del(config.src, callback);
});
