module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //uglify task
      uglify: {
 
        build: {
          src: 'js/script.js',
          dest: 'js/script.min.js'
        }
      },
      // watch: {
      //   css: {
      //     files: 'css/style.css',
      //     tasks: ['sass'],
      //     options: {
      //       livereload: true,
      //     },
      //   },
      // },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
 
          },
          files: {                         // Dictionary of files
            'css/style.css': 'sass/style.scss'       // 'destination': 'source'
          }
        }
      },
      jshint: {
        all: ['Gruntfile.js', 'js/script.js']
      },
 
    });
 
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
 
    // Default task(s).
    grunt.registerTask('default', ['uglify','sass','jshint']);
 
  };