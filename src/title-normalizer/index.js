const Phase = require('./phase')
const SquadType = require('./squad-type')
const OperationType = require('./operation-type')
const Damage = require('./damage')
const Bosses = require('./bosses')
const OneTurnKill = require('./one-turn-kill')

class TitleNormalizer {
  constructor (raw) {
    this.raw = raw
  }

  get phase () {
    const phase = new Phase(this.raw)
    return phase.get()
  }

  get bosses () {
    const bosses = new Bosses(this.raw)
    return bosses.get()
  }

  get squadType () {
    const squadType = new SquadType(this.raw)
    return squadType.get()
  }

  get oneTurnKill () {
    const oneTurnKill = new OneTurnKill(this.raw)
    return oneTurnKill.get() || false
  }

  get damage () {
    const damage = new Damage(this.raw)
    return damage.get()
  }

  get operationType () {
    const operationType = new OperationType(this.raw)
    return operationType.get()
  }
}

module.exports = TitleNormalizer
