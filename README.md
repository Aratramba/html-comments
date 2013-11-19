# html-comments
Simple nodejs module that collects all comments from input html. Optionally filter out everything that begins with a given keyword.

# Example
```js
var htmlcomments = require('html-comments');
var comments = htmlcomments.loadFile('file.html');
var filtered = htmlcomments.filter(comments, 'yep');
```

```html
<div>
  <!-- yep
  ima be collected
  -->

  <!-- nope
  aint gonna be collected
  -->

  <!--
  me either
  -->
</div>
```

# API
`loadFile(path)`

Load an html file at the given path. Returns all comments from that html file.

`load(src)`

Load html source string. Returns all comments.

`filter(comments, keyword = '', removeKeyword = false)`

Filter out every comment that starts with the given keyword. Optionally remove that keyword.

