'use strict';

var grunt = require('grunt');
var htmlcomments, file, keyword, comments;

exports.htmlcomments = {

  setUp: function(done) {
    htmlcomments = require('../main');
    file = 'test/fixtures/index.html';
    keyword = 'yep';

    done();
  },

  all: function(test) {
    test.expect(1);
    
    comments = htmlcomments.loadFile(file);
    test.equal(comments.length, 3, 'should return all html comments.');
    test.done();
  },

  filter: function(test) {
    test.expect(1);
    
    var filtered = htmlcomments.filter(comments, keyword);
    test.equal(filtered.length, 1, 'should return filtered html comments.');
    test.done();
  },

  nokeyword: function(test) {
    test.expect(1);
    
    var filtered = htmlcomments.filter(comments);
    test.equal(filtered.length, 3, 'should return all html comments, no keyword specified.');

    test.done();
  },

  customkeyword: function(test) {
    test.expect(1);

    var html = grunt.file.read(file);
    
    var comments = htmlcomments.load(html);
    var filtered = htmlcomments.filter(comments, 'nope');
    test.equal(filtered.length, 1, 'should return all html comments, with keyword nope');

    test.done();
  },

  removekeyword: function(test) {
    test.expect(1);

    var html = grunt.file.read(file);
    
    var comments = htmlcomments.load(html);
    var filtered = htmlcomments.filter(comments, 'yep', true);
    test.equal(filtered[0], '\n        ima be collected', 'should return filtered html comments, remove the keyword');

    test.done();
  }
};
