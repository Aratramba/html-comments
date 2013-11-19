
module.exports = (grunt) ->

  grunt.loadNpmTasks('grunt-contrib-nodeunit')
  grunt.loadNpmTasks('grunt-contrib-clean')
  
  grunt.registerTask('default', ['clean', 'nodeunit'])

  grunt.initConfig

    clean:
      tests: ['test/tmp']

    nodeunit:
      all: ['test/htmlcomments_test.js'],

  