const fs = require('fs')
const path = require('path')
const SquadType = require('../../src/title-normalizer/squad-type')

describe('TitleNormalizer', () => {
  describe('SquadType', () => {
    let titles
    before(() => {
      titles = fs.readFileSync(
        path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
    })

    it('test', () => {
      for (const title of titles) {
        const squadType = new SquadType(title)

        console.log(require('util').inspect({
          before: title,
          after: squadType.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
