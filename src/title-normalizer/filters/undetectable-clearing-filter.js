class UndetectableClearingFilter {
  static filter (context, output) {
    if (!context.detected) {
      output = null
    }
    return {
      context,
      output,
    }
  }
}

module.exports = UndetectableClearingFilter
