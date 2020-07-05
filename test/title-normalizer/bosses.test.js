const fs = require('fs')
const path = require('path')
const Bosses = require('../../src/title-normalizer/bosses')

describe('TitleNormalizer', () => {
  describe('Bosses', () => {
    let titles
    before(() => {
      titles = fs.readFileSync(
        path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
    })

    it('test', () => {
      for (const title of titles) {
        const bosses = new Bosses(title)

        console.log(require('util').inspect({
          before: title,
          after: bosses.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
