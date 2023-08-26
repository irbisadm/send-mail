# Community contributed client for Smtp2Go API

## This package is a community contributed client for Smtp2Go API. It is not officially supported nor created by Smtp2Go API.

If you have any problem or question, please, contact contributors of this package at GitHub.


## Installation
```bash
npm install @irbisadm/smtp2go --save
# or
yarn add @irbisadm/smtp2go
```

## Usage

The example below shows how to send email with attachments using this library.

```typescript
import {Smtp2Go} from '@irbisadm/smtp2go';

const smtp2Go = new Smtp2Go();
const client = smtp2Go.client({
  key: 'YOUR_SECURE_KEY'
});
const attachments = await Promise.all([
  client.email.readAttachment('./test.pdf','application/pdf'),
  client.email.readAttachment('./test.txt','text/plain'),
])

const sendReport = await client.email.send({
  to: ['Test Person <test@example.com>'],
  sender: 'Test Persons Friend <test2@example.com>',
  subject: 'Hello Test Person',
  textBody: `You're my favorite test person ever`,
  htmlBody: `<h1>You're my favorite test person ever</h1>`,
  customHeaders: {
      'Reply-To': 'Actual Person <test3@example.com>'
  },
  attachments
});
```


## License (MIT)
Copyright 2023 Igor Sheko <i@irbisadm.dev>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.