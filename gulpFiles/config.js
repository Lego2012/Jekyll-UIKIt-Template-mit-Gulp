var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';
var bower             = 'app/_bower_components'

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      // Keine Nachrichten an den Browser schicken
      notify: false,
      // Browser nicht automatisch öffnen
      open: false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      // Keine Nachrichten an den Browser schicken
      notify: false,
      // Browser nicht automatisch öffnen
      open: false
    }
  },
  delete: {
    src: [development, developmentAssets + '/css', developmentAssets + '/js']
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },
  fonts: {
    development: {
      src:  srcAssets + '/fonts/*.*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  srcAssets + '/fonts/*.*',
      dest: productionAssets + '/fonts'
    }
  },
  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css'
  },
  concatHead: {
    src: srcAssets + '/javascripts/head/*',
    dest: developmentAssets +  '/js'
  },
  concatFoot: {
    src: srcAssets + '/javascripts/foot/*',
    dest: developmentAssets +  '/js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  images: {
    development: {
      src:  srcAssets + '/images/**/*',
      dest: developmentAssets + '/images'
    },
    production: {
      src:  srcAssets + '/images/**/*',
      dest: productionAssets + '/images'
    }
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/_pages/**/*.{html,markdown,md}',
      src + '/*.{html,markdown,md,yml,json,txt,xml}'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    svg:     srcAssets + '/images/vectors/*.svg'
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {}
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true
      }
    }
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: 'path-to-website-root',
      root: production,
      hostname: 'hostname',
      username: 'username',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store', '_authors-README.md'],
      include: []
    }
  }
};
