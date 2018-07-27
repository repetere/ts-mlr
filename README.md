# @tensorscript/ts-mlr

[![Coverage Status](https://coveralls.io/repos/github/repetere/ts-mlr/badge.svg?branch=master)](https://coveralls.io/github/repetere/ts-mlr?branch=master) [![Build Status](https://travis-ci.org/repetere/ts-mlr.svg?branch=master)](https://travis-ci.org/repetere/ts-mlr)

Machine Learning tools built with Tensorflow
### [Full Documentation](https://github.com/repetere/@tensorscript/ts-mlr/blob/master/docs/API.md)

### Installation

```sh
$ npm i @tensorscript/ts-mlr
```


### Testing

```sh
$ npm i
$ npm test
```

### Contributing

Fork, write tests and create a pull request!

### Misc

As of Node 8, ES modules are still used behind a flag, when running natively as an ES module

```sh
$ node --experimental-modules my-machine-learning-script.mjs
# Also there are native bindings that require Python 2.x, make sure if you're using Andaconda, you build with your Python 2.x bin
$ npm i --python=/usr/bin/python
 ```

License
----

MIT