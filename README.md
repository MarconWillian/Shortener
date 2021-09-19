# Shortener

## Install

You can install with [npm](https://www.npmjs.com/package/shortener-link):
```bash
  npm install shortener-link
```

You can install with [yarn](https://yarnpkg.com/package/shortener-link):
```bash
  yarn add shortener-link
```

## ouo.io Syntax
You short a link with ouo.io.

You can use:

```javascript
const ouoIo = require('shortener-link/ouoIo');

const link = 'https://7-up.net/embed-ih21389uah9a.html';

const ouoShort = ouoIo({ apiKey: 'TYvpHJGW' });

const shortenedMask = ouoShort.mask(link);
// > { valid: true, linkShorted: "https://ouo.io/qs/TYvpHJGW?s=https://7-up.net/embed-ih21389uah9a.html" }

ouoShort.short(link)
  .then(shortened => {

    console.log(shortened)
    // > { valid: true, linkShorted: "https://ouo.io/UcPf3IH" }
  })
```

```typescript
import ouoIo from 'shortener-link/ouoIo';

const link = 'https://7-up.net/embed-ih21389uah9a.html';

const ouoShort = ouoIo({ apiKey: 'TYvpHJGW' });

const shortenedMask = ouoShort.mask(link);
// > { valid: true, linkShorted: "https://ouo.io/qs/TYvpHJGW?s=https://7-up.net/embed-ih21389uah9a.html" }

const shortened = ouoShort.short(link);
// > Promise<{ valid: true, linkShorted: "https://ouo.io/UcPf3IH" }>
```

## With Support to:
- ouo.io
- stfly.me
- shrtfly.com
- shrinkearn.com
- clk.sh
- fc.lc
