const bossNames = require('../constants/boss-names')

class KnownBossNamesDetectionAndDeletionFilter {
  static filter (context, output) {
    const match = bossNames.filter(bossName => output.indexOf(bossName) >= 0)
    if (match.length) {
      context.detected = true
      context.bosses
        ? context.bosses = context.bosses
          .concat(match)
          .filter((boss, i, self) => self.indexOf(boss) === i)
        : context.bosses = match
      for (const boss of match) {
        output = output.replace(new RegExp(boss, 'g'), '')
      }
    }

    return {
      context,
      output,
    }
  }
}

module.exports = KnownBossNamesDetectionAndDeletionFilter
