var gulp = require('gulp');

/**
 * Starte Task browsersync:production
 */
/* gulp.task('publish', ['browsersync:production']); */
gulp.task('publish-test', ['build-test:production']);
