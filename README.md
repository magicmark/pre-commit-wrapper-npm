# pre-commit-wrapper-npm
A wrapper/bootstrap script for [pre-commit](https://github.com/pre-commit/pre-commit) for npm/yarn.

## Getting started
```bash
$ yarn add pre-commit-wrapper-npm --dev
```

## Installing hooks
Make sure to remember to install the pre-commit hook to your local repo:
```bash
$ pre-commit install -f --install-hooks
```

That's it! You can configure pre-commit as normal, following the [docs](http://pre-commit.com/).

(The pre-commit executable is available via `./node_modules/.bin/pre-commit`)
