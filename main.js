'use strict';
/* globals require, console, module */


var filter, load, loadFile;

var cheerio = require('cheerio');
var fs = require('fs');


/**
 * load file
 */

function loadFile(path, options) {
  options = options || {};

  try {
    return load(fs.readFileSync(path), options);
  } catch (_error) {
    var e = _error;
    console.log(e);
    return false;
  }
}


/**
 * load html source
 */

function load(src, options) {

  // set defaults
  options = options || {};
  options.keyword = options.keyword || '';
  options.removeKeyword = options.removeKeyword || false;

  // store comments
  var comments = [];

  // load DOM
  var $ = cheerio.load(src);

  // find all elements, return only comments
  $('*').contents().map(function(n, el) {
    if (el.type === 'comment') {
      src = el.data.trim();

      // keyword check
      if(src.trim().substring(0, options.keyword.length) === options.keyword){

        // remove keyword from comment
        if(options.removeKeyword){
          src = src.substring(options.keyword.length);
        }

        // push comment
        return comments.push(src);
      }
    }
  }.bind(this));
  return comments;
}


/**
 * export
 */

module.exports = {
  loadFile: loadFile,
  load: load
};
