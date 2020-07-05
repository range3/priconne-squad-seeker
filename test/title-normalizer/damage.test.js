const fs = require('fs')
const path = require('path')
const Damage = require('../../src/title-normalizer/damage')

describe('TitleNormalizer', () => {
  describe('Damage', () => {
    let titles
    before(() => {
      titles = fs.readFileSync(
        path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
    })

    it('test', () => {
      for (const title of titles) {
        const damage = new Damage(title)

        console.log(require('util').inspect({
          before: title,
          after: damage.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
