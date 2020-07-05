const Filterable = require('./filterable')
const BracketsNormalizationFilter = require('./filters/brackets-normalization-filter')
const PriconneInBracketDeletionFilter = require('./filters/priconne-in-bracket-deletion-filter')
const NumberNormalizationFilter = require('./filters/number-normalization-filter')
const RemoveNonPrintableFilter = require('./filters/remove-non-printable-filter')
const OperationTypeDetectionFilter = require('./filters/operation-type-detection-filter')
const UndetectableClearingFilter = require('./filters/undetectable-clearing-filter')

class SquadType extends Filterable {
  constructor (raw) {
    super(raw, [
      RemoveNonPrintableFilter,
      BracketsNormalizationFilter,
      NumberNormalizationFilter,
      PriconneInBracketDeletionFilter,
      OperationTypeDetectionFilter,
      UndetectableClearingFilter,
    ])
  }
}

module.exports = SquadType
