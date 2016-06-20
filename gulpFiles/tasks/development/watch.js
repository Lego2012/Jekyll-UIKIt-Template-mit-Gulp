var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,             ['jekyll-rebuild']);
  gulp.watch(config.sass,               ['sass']);
  gulp.watch('app/_includes/**/*.pug',  ['pug']);
  gulp.watch(config.scriptsHead,        ['scriptsHead']);
  gulp.watch(config.scriptsFoot,        ['scriptsFoot']);
  gulp.watch(config.images,             ['images:development']);
});
