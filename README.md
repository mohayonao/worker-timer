# worker-timer
[![Build Status](http://img.shields.io/travis/mohayonao/worker-timer.svg?style=flat-square)](https://travis-ci.org/mohayonao/worker-timer)
[![NPM Version](http://img.shields.io/npm/v/worker-timer.svg?style=flat-square)](https://www.npmjs.org/package/worker-timer)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> Timer API that works stable in background tabs

## Installation

```
npm install worker-timer
```

## API

- `setInterval(callback: function, delay: number, ...params: any): number`
- `clearInterval(timerId: number): void`
- `setTimeout(callback: function, delay: number, ...params: any): number`
- `clearTimeout(timerId: number): void`

## Example

Same as the native Timer API

```js
const WorkerTimer = require("worker-timer");

let count = 0;

WorkerTimer.setInterval(() => {
  count += 1;
  console.log("count: " + count);
}, 1000);
```

## License

MIT
