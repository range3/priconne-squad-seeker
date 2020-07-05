class Filterable {
  constructor (raw, filters) {
    this.raw = raw
    this.filters = filters || []
  }

  toString () {
    const data = this.get()
    return data ? data.toString() : null
  }

  get () {
    return this.filters.reduce((acc, cur) => {
      return cur.filter(acc.context, acc.output)
    }, {
      context: {},
      output: `${this.raw}`,
    }).output
  }
}

module.exports = Filterable
