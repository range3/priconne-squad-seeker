const fs = require('fs')
const path = require('path')
const OneTurnKill = require('../../src/title-normalizer/one-turn-kill')

describe('TitleNormalizer', () => {
  describe('OneTurnKill', () => {
    let titles
    before(() => {
      titles = fs.readFileSync(
        path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
    })

    it('test', () => {
      for (const title of titles) {
        const otk = new OneTurnKill(title)

        console.log(require('util').inspect({
          before: title,
          after: otk.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
