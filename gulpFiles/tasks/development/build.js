var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', ['pug'], function(callback) {
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
