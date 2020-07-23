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
