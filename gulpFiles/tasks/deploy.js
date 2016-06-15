var gulp = require('gulp');
var sequence = require('run-sequence');

/**
 * Start rsync task
 */
gulp.task('deploy', function(callback) {
  sequence('publish',
           'rsync',
    callback);
});
