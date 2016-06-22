'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      build: {
        files: {
        'build/assets/css/main.css': 'app/_assets/scss/main.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
