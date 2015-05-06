'use strict';
/* globals require, console, module */


var filter, load, loadFile;

var cheerio = require('cheerio');
var fs = require('fs');


/**
 * load file
 */

function loadFile(path) {
  try {
    return load(fs.readFileSync(path));
  } catch (_error) {
    var e = _error;
    console.log(e);
    return false;
  }
}


/**
 * load html source
 */

function load(src) {
  var comments = [];
  var $ = cheerio.load(src);
  $('*').contents().map(function(n, el) {
    if (el.type === 'comment') {
      return comments.push(el.data);
    }
  });
  return comments;
}


/**
 * filter
 */

function filter(comments, keyword, removeKeyword) {
  var comment, filtered, _i, _len;
  if (keyword === null || typeof keyword === 'undefined') {
    keyword = '';
  }
  if (removeKeyword === null) {
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
}


/**
 * export
 */

module.exports = {
  loadFile: loadFile,
  load: load,
  filter: filter
};
