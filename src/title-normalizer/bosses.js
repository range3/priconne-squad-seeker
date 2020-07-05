const Filterable = require('./filterable')
const BracketsNormalizationFilter = require('./filters/brackets-normalization-filter')
const PriconneInBracketDeletionFilter = require('./filters/priconne-in-bracket-deletion-filter')
const NumberNormalizationFilter = require('./filters/number-normalization-filter')
const RemoveNonPrintableFilter = require('./filters/remove-non-printable-filter')
const KnownBossNamesDetectionAndDeletionFilter = require('./filters/known-boss-names-detection-and-deletion-filter')
const SetDetectedBossNameArrayAsOutputFilter = require('./filters/set-detected-boss-name-array-as-output-filter')

class Bosses extends Filterable {
  constructor (raw) {
    super(raw, [
      RemoveNonPrintableFilter,
      BracketsNormalizationFilter,
      NumberNormalizationFilter,
      PriconneInBracketDeletionFilter,
      KnownBossNamesDetectionAndDeletionFilter,
      SetDetectedBossNameArrayAsOutputFilter,
    ])
  }
}

module.exports = Bosses
