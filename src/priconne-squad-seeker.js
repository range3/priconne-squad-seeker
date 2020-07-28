const { DateTime } = require('luxon')
const Youtube = require('./youtube/youtube')
const TitleNormalizer = require('./title-normalizer')

class PriconneSquadSeeker {
  constructor (options = {}) {
    this.youtube = new Youtube(options)
  }

  async seek (query = {}) {
    if (!query.phase && !query.boss) {
      throw new Error('query error: phase or boss is required.')
    }

    const now = DateTime.fromObject({ zone: 'Asia/Tokyo' })
    query.year = query.year || now.year
    query.month = query.month || now.month

    const searchQuery = this._makeSearchQuery(query.phase, query.boss)
    const publishedAfter = DateTime.fromObject({
      year: query.year,
      month: query.month,
      day: 1,
      zone: 'Asia/Tokyo',
    })

    const resIter = this.youtube.searchVideos(searchQuery, {
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
          publishedAt: item.snippet.publishedAt,
        }
      }))
    }

    return items
      .map(item => {
        const n = new TitleNormalizer(item.title)
        return {
          ...item,
          publishedAt: DateTime.fromISO(item.publishedAt),
          phase: n.phase,
          bosses: n.bosses,
          squadType: n.squadType,
          damage: n.damage,
          oneTurnKill: n.oneTurnKill,
          operationType: n.operationType,
        }
      })
      .sort((a, b) => Number(a.damage) - Number(b.damage))
  }

  _makeSearchQuery (phase, boss) {
    const bosses = typeof boss === 'string' ? [boss] : boss

    let query = ''
    if (bosses) {
      query += bosses
        .map(boss => `intitle:"${boss}"`)
        .join(' OR ')
    }
    if (phase) {
      query += ` intitle:"${phase}段階目"`
    }
    return query
  }
}

module.exports = PriconneSquadSeeker
