var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var config      = require('../../config').jekyll.production;

/*
* Build the Jekyll Site
*/
gulp.task('jekyll:production', function(done) {
  browsersync.notify('Compiling Jekyll (Production)');

  /*
  * Hier wird die Produktionsumgebung festgelegt, damit z. B. Google Analytics
  * nur beim Publish gerendert wird. Siehe dazu Details in der `default.html`
  */
  var productionEnv = process.env;
  productionEnv.JEKYLL_ENV = 'production';

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' , env:productionEnv })
  .on('close', done);
});
