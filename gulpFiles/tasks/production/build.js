var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', ['pug'], function(callback) {
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
