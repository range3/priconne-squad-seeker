const XRegExp = require('xregexp')

class OneTurnKillDetectionFilter {
  static filter (context, output) {
    if (!context.detected) {
      const reOtk = XRegExp(`
        (?<otk> ワンパン|OTK)
      `, 'ix')

      if (reOtk.test(output)) {
        context.detected = true
        output = true
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = OneTurnKillDetectionFilter
