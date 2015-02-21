# worker-timer
[![Build Status](http://img.shields.io/travis/mohayonao/worker-timer.svg?style=flat-square)](https://travis-ci.org/mohayonao/worker-timer)
[![NPM Version](http://img.shields.io/npm/v/worker-timer.svg?style=flat-square)](https://www.npmjs.org/package/worker-timer)
[![Bower](https://img.shields.io/bower/v/worker-timer.svg?style=flat-square)](https://github.com/mohayonao/worker-timer)

> Stable timer API

## Installation

bower:

```
bower install worker-timer
```

downloads:

- [worker-timer.js](https://raw.githubusercontent.com/mohayonao/tickable-timer/master/build/worker-timer.js)
- [worker-timer.min.js](https://raw.githubusercontent.com/mohayonao/tickable-timer/master/build/worker-timer.min.js)

## API

- `setInterval(callback: function, delay: number): number`
- `clearInterval(timerId: number): void`
- `setTimeout(callback: function, delay: number): number`
- `clearTimeout(timerId: number): void`

## License

MIT
