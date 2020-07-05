const XRegExp = require('xregexp')

class PhaseDetectionFilter {
  static filter (context, output) {
    if (!context.detected) {
      const re = XRegExp(`
      (?: Phase\\s*)?
      (?<phase> [1-9])
      (?:
        (?:
          段階目 |
          段回目 |
          段目
        ) |
        (?:
          (?:
            st |
            nd |
            rd |
            th
          )
          (?: \\s*Phase)?
        )
      )
      `, 'ix')

      const match = XRegExp.exec(output, re)
      if (match) {
        context.detected = true
        output = Number(match.phase)
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = PhaseDetectionFilter
