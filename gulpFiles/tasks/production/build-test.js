var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Starte alle Tasks, die für ein Build benötigt werden, in einer definierten Reihenfolge
 */
gulp.task('build-test:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    'sass',
    'scriptsHead',
    'scriptsFoot',
    'fonts:production',
    'images:production',
  ],
  'revision',
  'rev:collect',
  [
    'webp',
    'gzip'
  ],
  callback);
});
