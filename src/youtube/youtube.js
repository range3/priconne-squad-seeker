const { YoutubeDataAPI } = require('youtube-v3-api')

class Youtube {
  constructor (options = {}) {
    this.apiKey = options.apiKey || process.env.API_KEY
    this.api = new YoutubeDataAPI(this.apiKey)
  }

  async * searchVideos (q, options) {
    let res = {}
    do {
      res = await this.api.searchAll(q, 50, {
        type: 'video',
        pageToken: res.nextPageToken || '',
        ...options,
      })
      yield res
    } while (res.nextPageToken)
  }
}

module.exports = Youtube
