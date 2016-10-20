htmlcomments = require('../main');
file = 'test/fixtures/external-comment.html';
console.log(htmlcomments.loadFile(file));

console.log('\n\n---\n\n');

htmlcomments = require('../main');
file = 'test/fixtures/index.html';
console.log(htmlcomments.loadFile(file));