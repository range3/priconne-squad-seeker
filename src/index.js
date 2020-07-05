const program = require('commander')
const chalk = require('chalk')
const { DateTime } = require('luxon')

const Youtube = require('./youtube')
const TitleNormalizer = require('./title-normalizer')
const youtube = new Youtube()

const now = DateTime.fromObject({ zone: 'Asia/Tokyo' })

program
  .name('priconne-squad-seeker')
  .option('-p, --phase <number>', 'Phase')
  .option('-b, --boss <value>', 'Boss name')
  .option('-y, --year  <number>', 'Year clan-battle organized', now.year)
  .option('-m, --month <number>', 'Month clan-battle organized', now.month)
  .parse(process.argv)

if (!program.phase && !program.boss) {
  console.error(chalk.white.bgRed('error: --phase or --boss option is required.'))
  program.help()
}

;(async () => {
  let query = 'intitle:"プリコネ"'
  if (program.phase) {
    query += ` intitle:"${program.phase}段階目"`
  }
  if (program.boss) {
    query += ` intitle:"${program.boss}"`
  }

  const publishedAfter = DateTime.fromObject({ year: program.year, month: program.month, day: 1, zone: 'Asia/Tokyo' })

  const resIter = youtube.searchVideos(query, {
    order: 'date',
    publishedAfter: publishedAfter.toISO(),
    publishedBefore: publishedAfter.plus({ months: 1 }).toISO(),
  })

  let items = []
  for await (const res of resIter) {
    items = items.concat(res.items.map(item => {
      return {
        videoId: item.id.videoId,
        url: `https://youtu.be/${item.id.videoId}`,
        title: item.snippet.title,
        channelTitle: item.snippet.channelTitle,
      }
    }))
  }

  items
    .reverse()
    .map((item, index) => {
      const n = new TitleNormalizer(item.title)
      return {
        ...item,
        index,
        phase: n.phase,
        bosses: n.bosses,
        squadType: n.squadType,
        damage: n.damage,
        operationType: n.operationType,
      }
    })
    .sort((a, b) => Number(a.damage) - Number(b.damage) || a.index - b.index)
    .forEach(i => {
      const dmgFormed = i.damage ? `${i.damage / 10000}万` : ''
      console.log(
        `###${i.phase || '?'}段階目::${i.bosses.join(' ')} ${i.squadType || ''}${dmgFormed} ${i.operationType || ''}`)
      console.log(`${i.channelTitle}: ${i.url}\n`)
    })
})()
  .catch(err => console.error(require('util').inspect(err, false, null, true)))
