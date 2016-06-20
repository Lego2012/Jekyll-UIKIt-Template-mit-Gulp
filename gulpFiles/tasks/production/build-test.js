var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build-test:production', ['pug'], function(callback) {
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
