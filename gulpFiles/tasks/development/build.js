var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Starte alle Tasks, die für ein Build benötigt werden, in einer definierten Reihenfolge
 */
gulp.task('build', function(callback) {
  runSequence('delete', 'jekyll',
  [
    'gruntSass',
    'fonts:development',
    'scriptsHead',
    'scriptsFoot',
    'images:development'
  ],
  callback);
});
