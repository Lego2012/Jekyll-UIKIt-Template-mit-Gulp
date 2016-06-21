var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Starte alle Tasks, die für ein Build benötigt werden, in einer definierten Reihenfolge
 */
gulp.task('build:production', function(callback) {
  runSequence('delete', 'jekyll:production',
  [
    'sass',
    'scriptsHead',
    'scriptsFoot',
    'fonts:production',
    'images:production',
  ],
  'base64',
  [
    'optimize:css',
    'optimize:js',
    // Die Bilder werden am besten direkt im Ordner mit ImageOptim optimiert,
    // da dieser Prozess sehr zeitaufwendig ist.
    //'optimize:images',
    'optimize:html',
  ],
  'revision',
  'rev:collect',
  [
    'webp',
    'gzip'
  ],
  callback);
});
