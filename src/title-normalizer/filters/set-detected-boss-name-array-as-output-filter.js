class SetDetectedBossNameArrayAsOutputFilter {
  static filter (context, output) {
    output = context.bosses || []
    return {
      context,
      output,
    }
  }
}

module.exports = SetDetectedBossNameArrayAsOutputFilter
