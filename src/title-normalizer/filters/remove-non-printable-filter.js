const XRegExp = require('xregexp')

class RemoveNonPrintableFilter {
  static filter (context, output) {
    return {
      context,
      output: output.replace(XRegExp('\\p{C}', 'g'), ''),
    }
  }
}

module.exports = RemoveNonPrintableFilter
