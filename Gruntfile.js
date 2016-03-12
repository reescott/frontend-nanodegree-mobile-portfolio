module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    less: {
      development: {
        options: {
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 3 versions"]})
          ],
          compress: true,
          yuicompress: true,
          optimization: 2,
          // sourceMap: true,
          //   sourceMapFilename: 'css/style.css.map', // where file is generated and located
          //   sourceMapURL: './style.css.map', // the complete url and filename put in the compiled css file
          // sourceMapRootpath: '/' // adds this path onto the sourcemap filename and less file paths
        },
        files: [
          { "css/style.min.css" : "css/style.css"}, 
          {"css/print.min.css" : "css/print.css"},
          {"css/critical.min.css" : "css/critical.css"}]
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      // uglify task configuration goes here.
      target: {
        files: [
          {
            src: 'js/perfmatters.js',
            dest: 'js/perfmatters.min.js'
          }
        ]
      }
    },
    // svgstore: {
    //   options: {
    //     class : 'wvghf-icons'
    //   },
    //   default : {
    //     files: {
    //       'assets/svg/prod/wvgheader-icons.svg': ['assets/svg/header/*.svg'],
    //       'assets/svg/prod/wvgfooter-icons.svg': ['assets/svg/footer/*.svg']
    //     },
    //   },
    // },

    // cssmin: {
    //   options: {
    //     shorthandCompacting: false,
    //     roundingPrecision: -1
    //   },
    //   target: {
    //     files: [{
    //       src: 'css/cafe.css',
    //       dest: 'css/cafe.min.css'
    //     }]
    //   }
    // },
    watch: {
      all: {
        files: ['*.css', '!*.min.css'], // which files to watch
        tasks: ['css'],
        options: {
          nospawn: false,
        }
      },
      js: {
        files: [  'js/*.js', '!*.min.js'], //exclude minified files
        tasks: ['uglify'],
        options: {
          nospawn: false,
        }
      }
    },
    criticalcss: {
        custom: {
            options: {
                url: "http://udacity.local:8083/fe-mobile-portfolio/",
                width: 1200,
                height: 900,
                outputfile: "css/critical.css",
                filename: "css/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                buffer: 800*1024,
                ignoreConsole: false
            }
        }
    },
  
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less','uglify','watch']);
  grunt.registerTask('css', ['criticalcss','less']);
  grunt.registerTask('js', ['uglify']);
  // Server task
  // grunt.registerTask('server', [
  //   'express',
  //   'open',
  //   'watch'
  // ]);

};