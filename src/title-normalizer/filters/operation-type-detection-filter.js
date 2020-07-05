const XRegExp = require('xregexp')

class OperationTypeDetectionFilter {
  static filter (context, output) {
    if (!context.detected) {
      const reSemiAuto = XRegExp(`
        (?<operation> セミオート|ほぼオート)
      `, 'ix')

      const reFullAuto = XRegExp(`
        (?<operation> (?:フル)?オート)
      `, 'ix')

      if (reSemiAuto.test(output)) {
        context.detected = true
        output = 'セミオート'
      } else if (reFullAuto.test(output)) {
        context.detected = true
        output = 'フルオート'
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = OperationTypeDetectionFilter
