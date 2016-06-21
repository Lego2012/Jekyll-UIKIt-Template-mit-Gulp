var gulp = require('gulp');
var sequence = require('run-sequence');

/**
 * Starte rsync Task nachdem der Publish Task fertig ist
 */
gulp.task('deploy', function(callback) {
  sequence('publish',
           'rsync',
    callback);
});
