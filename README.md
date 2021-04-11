# FixEmail

## Install

You can install with [npm](https://www.npmjs.com/package/fixemail):
```bash
  npm install fixemail
```

You can install with [yarn](https://yarnpkg.com/package/fixemail):
```bash
  yarn add fixemail
```

## FixEmail Syntax
You can fix error in email syntax by user.

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


## Validate Email
You can validate your email with this package.

Used package [email-validator](https://www.npmjs.com/package/email-validator)

You can use:

```javascript
const { validate } = require('fixemail');

validate('email@gmail.com')
// > true

validate('emai l@gmail .com')
// > false

```

```typescript
import { validate } from 'fixemail';

validate('email@gmail.com')
// > true

validate('emai l@gmail .com')
// > false

```
