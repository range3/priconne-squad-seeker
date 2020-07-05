const fs = require('fs')
const path = require('path')
const OperationType = require('../../src/title-normalizer/operation-type')

describe('TitleNormalizer', () => {
  describe('OperationType', () => {
    let titles
    before(() => {
      titles = fs.readFileSync(
        path.resolve(__dirname, 'data/titles'), 'utf8').trim().split(/\n/)
    })

    it('test', () => {
      for (const title of titles) {
        const operationType = new OperationType(title)

        console.log(require('util').inspect({
          before: title,
          after: operationType.get(),
        }, {
          breakLength: 0,
          colors: true,
        }))
      }
    })
  })
})
