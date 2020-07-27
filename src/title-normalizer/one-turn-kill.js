const Filterable = require('./filterable')
const BracketsNormalizationFilter = require('./filters/brackets-normalization-filter')
const PriconneInBracketDeletionFilter = require('./filters/priconne-in-bracket-deletion-filter')
const NumberNormalizationFilter = require('./filters/number-normalization-filter')
const RemoveNonPrintableFilter = require('./filters/remove-non-printable-filter')
const UndetectableClearingFilter = require('./filters/undetectable-clearing-filter')
const OneTurnKillDetectionFilter = require('./filters/one-turn-kill-detection-filter')

class OneTurnKill extends Filterable {
  constructor (raw) {
    super(raw, [
      RemoveNonPrintableFilter,
      BracketsNormalizationFilter,
      NumberNormalizationFilter,
      PriconneInBracketDeletionFilter,
      OneTurnKillDetectionFilter,
      UndetectableClearingFilter,
    ])
  }
}

module.exports = OneTurnKill
