class BracketsNormalizationFilter {
  static filter (context, output) {
    const pairs = [
      ['【', '】'],
      ['（', '）'],
      ['「', '」'],
      ['\\[', '\\]'],
      ['［', '］'],
    ]

    pairs.forEach(([open, close]) => {
      output = output.replace(new RegExp(`${open}(.+?)${close}`, 'g'), '($1)')
    })

    return {
      context,
      output,
    }
  }
}

module.exports = BracketsNormalizationFilter
