cheerio = require('cheerio')
fs = require('fs')


# load html file
loadFile = (path) ->
  try
    return @load(fs.readFileSync(path))
  catch e
    console.log e
    return false
    

# load html source
load = (src) ->
  comments = []
  $ = cheerio.load(src)
  $("*").contents().map (n, el) =>
    if el.type is 'comment'
      comments.push(el.data)
  return comments


# filter on keyword
filter = (comments, keyword = '', removeKeyword = false) ->
  filtered = []
  for comment in comments
    if comment.trim().substring(0, keyword.length) is keyword
      if removeKeyword
        comment = comment.trim().substring(keyword.length)
      filtered.push(comment)
  return filtered



module.exports = {
  loadFile
  load
  filter
}