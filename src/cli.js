const program = require('commander')
const chalk = require('chalk')
const { DateTime } = require('luxon')

const PriconneSquadSeeker = require('./priconne-squad-seeker')

const now = DateTime.fromObject({ zone: 'Asia/Tokyo' })

program
  .name('priconne-squad-seeker')
  .option('-p, --phase <number>', 'Phase')
  .option('-b, --boss <values>', 'Boss name', (val, ret) => [...(ret || []), val])
  .option('-y, --year  <number>', 'Year clan-battle organized', now.year)
  .option('-m, --month <number>', 'Month clan-battle organized', now.month)
  .parse(process.argv)

if (!program.phase && !program.boss) {
  console.error(chalk.white.bgRed('error: --phase or --boss option is required.'))
  program.help()
}

;(async () => {
  const seeker = new PriconneSquadSeeker()

  const items = await seeker.seek(program)

  console.log(JSON.stringify(items
    .sort((a, b) => Number(a.damage) - Number(b.damage))))
  // .forEach(i => {
  //   const dmgFormed = i.damage ? `${i.damage / 10000}万` : ''
  //   console.log(
  //     `###${i.phase || '?'}段階目::${i.bosses.join(' ')} ${i.squadType || ''}${dmgFormed} ${i.operationType || ''}`)
  //   console.log(`${i.channelTitle}: ${i.url}`)
  //   console.log(`${i.publishedAt.toLocaleString(DateTime.DATETIME_MED)}\n`)
  // })
})()
  .catch(err => console.error(require('util').inspect(err, false, null, true)))
