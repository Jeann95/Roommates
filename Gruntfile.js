// Generated on 2014-10-04 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json']
      },
      js: {
        files: ['<%= yeoman.app %>/{,*/}*.js', '<%= yeoman.app %>/components/**/*.js', '<%= yeoman.app %>/public/js/*.js', '!<%= yeoman.app %>/public/lib/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['<%= yeoman.app %>/{,*/}*.js', '<%= yeoman.app %>/components/**/*.js', '!<%= yeoman.app %>/public/lib/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/{,*/}*.{scss,sass}', '<%= yeoman.app %>/components/**/*.scss', '<%= yeoman.app %>/public/css/*.scss'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/components/**/*.html',
          '.tmp/{,*/}*.css',
          '<%= yeoman.app %>/public/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/app/public/lib',
                connect.static('./app/public/lib')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/app/public/lib',
                connect.static('./app/public/lib')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['<%= yeoman.app %>/*.js', '<%= yeoman.app %>/components/**/*.js', '!<%= yeoman.app %>/components/**/test/*.js', '<%= yeoman.app %>/public/js/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/',
          src: '{,*/}*.css',
          dest: '.tmp/public/css'
        }]
      }
    },

    bowerInstall: {
        app: {
            src: ['<%= yeoman.app %>/index.html'],
            ignorePath: '<%= yeoman.app %>/'
        }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
          sassDir: '<%= yeoman.app %>',
          cssDir: '.tmp',
          generatedImagesDir: '.tmp/public/img/generated',
          imagesDir: '<%= yeoman.app %>/public/img',
          javascriptsDir: '<%= yeoman.app %>',
          fontsDir: '<%= yeoman.app %>/public/fonts',
          importPath: '<%= yeoman.app %>',
          httpImagesPath: '/public/img',
          httpGeneratedImagesPath: '/public/img/generated',
          httpFontsPath: '/public/fonts',
          relativeAssets: false,
          assetCacheBuster: false,
          raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= sysomos.dist %>/{,*/}*.js',
          '<%= sysomos.dist %>/public/css/{,*/}*.css',
          '!<%= sysomos.dist %>/public/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '!<%= sysomos.dist %>/public/fonts/*',
          '!<%= yeoman.app %>/public/lib/{,*/}*.js',
          '!<%= yeoman.app %>/public/lib/{,*/}*.css'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/public/img',
                src: '{,*/}*.{png,jpg,jpeg,gif}',
                dest: '<%= sysomos.dist %>/public/img'
            }]
        }
    },

    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>/public/img',
                src: '{,*/}*.svg',
                dest: '<%= sysomos.dist %>/public/img'
            }]
        }
    },

    htmlmin: {
        dist: {
            options: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true
            },
            files: [{
                expand: true,
                cwd: '<%= sysomos.dist %>',
                src: ['*.html', '{,*/}*.html'],
                dest: '<%= sysomos.dist %>'
            }]
        }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>',
                dest: '<%= sysomos.dist %>',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                    '*.html',
                    '{,*/}*.html',
                    'public/img/{,*/}*.{webp}',
                    'public/fonts/*',
                    'public/pdf/*',
                    'components/{,*/}*.html'
                ]
            }, {
                expand: true,
                cwd: '.tmp/images',
                dest: '<%= sysomos.dist %>/public/img',
                src: ['generated/*']
            }]
        },
        styles: {
            expand: true,
            cwd: '<%= yeoman.app %>',
            dest: '.tmp/',
            src: '{,*/}*.css'
        }
    },

    concurrent: {
        server: [
            'copy:styles',
            'compass:server'
        ],
        test: [
            'compass',
            'copy:styles',
            'jshint:test'
        ],
        dist: [
            'compass',
            'copy:styles',
            'imagemin',
            'svgmin'
        ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
