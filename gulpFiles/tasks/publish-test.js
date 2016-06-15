var gulp = require('gulp');

/**
 * Run task browsersync:production
 */
/* gulp.task('publish', ['browsersync:production']); */
gulp.task('publish-test', ['build-test:production']);
