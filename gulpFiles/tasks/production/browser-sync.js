var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').browsersync.production;

/**
 * Starte einen Server und beobachten Änderungen mit Browser-Sync
 **/
gulp.task('browsersync:production', ['build:production'], function() {
  browsersync(config);
});
