const XRegExp = require('xregexp')

class DamageWithManSuffixDetectionFilter {
  static filter (context, output) {
    if (!context.detected) {
      const reDamage = XRegExp(`
        (?<damage> (?:[1-9][0-9]*|0)(?:\\.[0-9]+)?)万
      `, 'ix')

      const match = XRegExp.exec(output, reDamage)
      if (match) {
        context.detected = true
        output = Number(match.damage) * 10000
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = DamageWithManSuffixDetectionFilter
