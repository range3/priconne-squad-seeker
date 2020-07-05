const fs = require('fs') // eslint-disable-line
const path = require('path') // eslint-disable-line
const Phase = require('../../src/title-normalizer/phase')

describe('TitleNormalizer', () => {
  describe('Phase', () => {
    let titles
    before(() => {
      // titles = fs.readFileSync(
      //   path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
      titles = [
        '【プリコネR】セミオート星四クリチカ　1000万弱　カルキノス（四段階目）【六月クランバトル】',
      ]
    })

    let phase
    beforeEach(() => {
      // phase = new Phase()
    })

    it('test', () => {
      for (const title of titles) {
        phase = new Phase(title)
        console.log(require('util').inspect({
          before: title,
          after: phase.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
