var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Starte Browser-Sync Task und beobachte die Dateien auf Änderungen
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.jekyll,             ['jekyll-rebuild']);
  gulp.watch('app/_assets/scss/**/*.scss',        ['gruntSass']);
  gulp.watch(config.scriptsHead,        ['scriptsHead']);
  gulp.watch(config.scriptsFoot,        ['scriptsFoot']);
  gulp.watch(config.images,             ['images:development']);
});
