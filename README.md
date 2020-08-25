# PrincessConnect! Re:Dive Clan-battle Squad Seeker

work in progress

## Usage
### CLI
```
$ API_KEY=your-youtube-data-api-key npx @range3/priconne-squad-seeker --help
```

### Lib
```js
  const PriconneSquadSeeker = require('@range3/priconne-squad-seeker')
  const seeker = new PriconneSquadSeeker({
    apiKey: process.env.API_KEY // default
  })
  const items = await seeker.seek({
    phase: 4,
    boss: 'カルキノス',
    year: 2020,
    month: 6,
  })
```

### Output Example
```json
[
  {
    "videoId":"exampleIdidid",
    "url":"https://youtu.be/exampleIdidid",
    "title":"[プリコネR] フルオート ワイバーン ４段階目 物理 [1100万]",
    "channelTitle":"ほげほげ",
    "publishedAt":"2020-07-30T08:43:35.000-00:00",
    "phase":4,
    "bosses":["ワイバーン"],
    "squadType":"物理",
    "damage":11000000,
    "oneTurnKill":false,
    "operationType":"フルオート"
  },
  ...
]
```
