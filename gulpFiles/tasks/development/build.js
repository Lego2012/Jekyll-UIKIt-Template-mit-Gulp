var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Starte alle Tasks, die für ein Build benötigt werden, in einer definierten Reihenfolge
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll',
    'sass',
    'fonts:development',
    'scriptsHead',
    'scriptsFoot',
    'images:development'
  ],
  'base64',
  callback);
});
