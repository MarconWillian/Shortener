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
const fixEmail = require('fixemail');

fixEmail('email@gmail.com')
// > { email: 'email@gmail.com', valid: true }

fixEmail('emai l@gmail .com')
// > { email: 'email@gmail.com', valid: true }

fixEmail('emai lgmail .com')
// > { email: 'emailgmail.com', valid: false }

```

```typescript
import fixEmail from 'fixemail';

fixEmail('email@gmail.com')
// > { email: 'email@gmail.com', valid: true }

fixEmail('emai l@gmail .com')
// > { email: 'email@gmail.com', valid: true }

fixEmail('emai lgmail .com')
// > { email: 'emailgmail.com', valid: false }

```
