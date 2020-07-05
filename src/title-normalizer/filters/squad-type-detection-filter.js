const XRegExp = require('xregexp')

class SquadTypeDetectionFilter {
  static filter (context, output) {
    if (!context.detected) {
      const rePhysical = XRegExp(`
      (?<type> 物理|Physical)
      `, 'ix')

      const reMagic = XRegExp(`
      (?<type> 魔法|Magic)
      `, 'ix')

      if (rePhysical.test(output)) {
        context.detected = true
        output = '物理'
      } else if (reMagic.test(output)) {
        context.detected = true
        output = '魔法'
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = SquadTypeDetectionFilter
