# circleci-monorepo-helper

A CLI tool used to generate CircleCI continuation workflows

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/circleci-monorepo-helper.svg)](https://npmjs.org/package/circleci-monorepo-helper)
[![CircleCI](https://circleci.com/gh/blimmer/circleci-monorepo-helper/tree/master.svg?style=shield)](https://circleci.com/gh/blimmer/circleci-monorepo-helper/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/circleci-monorepo-helper.svg)](https://npmjs.org/package/circleci-monorepo-helper)
[![License](https://img.shields.io/npm/l/circleci-monorepo-helper.svg)](https://github.com/blimmer/circleci-monorepo-helper/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g circleci-monorepo-helper
$ circleci-monorepo-helper COMMAND
running command...
$ circleci-monorepo-helper (-v|--version|version)
circleci-monorepo-helper/0.0.0 darwin-x64 node-v14.17.0
$ circleci-monorepo-helper --help [COMMAND]
USAGE
  $ circleci-monorepo-helper COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`circleci-monorepo-helper hello [FILE]`](#circleci-monorepo-helper-hello-file)
- [`circleci-monorepo-helper help [COMMAND]`](#circleci-monorepo-helper-help-command)

## `circleci-monorepo-helper hello [FILE]`

describe the command here

```
USAGE
  $ circleci-monorepo-helper hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ circleci-monorepo-helper hello
  hello world from ./src/hello.ts!
```

_See code:
[src/commands/hello.ts](https://github.com/blimmer/circleci-monorepo-helper/blob/v0.0.0/src/commands/hello.ts)_

## `circleci-monorepo-helper help [COMMAND]`

display help for circleci-monorepo-helper

```
USAGE
  $ circleci-monorepo-helper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

<!-- commandsstop -->
