const XRegExp = require('xregexp')

class PriconneInBracketDeletionFilter {
  static filter (context, output) {
    const re = XRegExp(`
      \\(
      [^)]*?
      プリコネ(?:[Rr][Ee]?)? 
      [^)]*?
      \\)
      `, 'xg')

    return {
      context,
      output: output.replace(re, ''),
    }
  }
}

module.exports = PriconneInBracketDeletionFilter
