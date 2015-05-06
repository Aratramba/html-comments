'use strict';
/* globals exports, require */

var htmlcomments, file, keyword, comments;

exports.htmlcomments = {

  setUp: function(done) {
    htmlcomments = require('../main');
    file = 'test/fixtures/index.html';

    done();
  },

  /**
   * Collect all comments
   */

  collect_all_comments: function(test) {
    test.expect(1);
    
    var comments = htmlcomments.loadFile(file);
    test.equal(comments.length, 3, 'should return all html comments.');
    test.done();
  },


  /**
   * Filter comments with keyword 'yep'
   */

  filter_comments: function(test) {
    test.expect(1);

    var options = {
      keyword: 'yep'
    };

    var comments = htmlcomments.loadFile(file, options);
    test.equal(comments.length, 1, 'should return filtered html comments.');
    test.done();
  },


  /**
   * Remove keyword 'yep' from comments
   */

  remove_keyword_from_comments: function(test) {
    test.expect(1);

    var options = {
      keyword: 'yep',
      removeKeyword: true
    };

    var comments = htmlcomments.loadFile(file, options);
    test.equal(comments[0], '\n        ima be collected', 'should return filtered html comments, remove the keyword');

    test.done();
  }
};
