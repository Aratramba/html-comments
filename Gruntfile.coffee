
module.exports = (grunt) ->

  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  
  grunt.registerTask('default', ['watch'])
  grunt.registerTask('test', ['clean', 'nodeunit'])

  grunt.initConfig

    watch:
      coffee:
        files: ['src/**/*.coffee']
        tasks: ['coffee']

    coffee:
      compile: 
        files:
          'main.js': 'src/index.coffee'

    clean:
      tests: ['test/tmp']

    nodeunit:
      all: ['test/htmlcomments_test.js'],

  