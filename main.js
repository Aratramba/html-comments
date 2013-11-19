(function() {
  var cheerio, filter, fs, load, loadFile;

  cheerio = require('cheerio');

  fs = require('fs');

  loadFile = function(path) {
    var e;
    try {
      return this.load(fs.readFileSync(path));
    } catch (_error) {
      e = _error;
      console.log(e);
      return false;
    }
  };

  load = function(src) {
    var $, comments,
      _this = this;
    comments = [];
    $ = cheerio.load(src);
    $("*").contents().map(function(n, el) {
      if (el.type === 'comment') {
        return comments.push(el.data);
      }
    });
    return comments;
  };

  filter = function(comments, keyword, removeKeyword) {
    var comment, filtered, _i, _len;
    if (keyword == null) {
      keyword = '';
    }
    if (removeKeyword == null) {
      removeKeyword = false;
    }
    filtered = [];
    for (_i = 0, _len = comments.length; _i < _len; _i++) {
      comment = comments[_i];
      if (comment.trim().substring(0, keyword.length) === keyword) {
        if (removeKeyword) {
          comment = comment.trim().substring(keyword.length);
        }
        filtered.push(comment);
      }
    }
    return filtered;
  };

  module.exports = {
    loadFile: loadFile,
    load: load,
    filter: filter
  };

}).call(this);
