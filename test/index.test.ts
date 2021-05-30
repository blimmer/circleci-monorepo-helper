import { expect, test } from '@oclif/test';
import { describe } from 'mocha';

import cmd = require('../src');

describe('circleci-monorepo-helper', () => {
  test
    .stdout()
    .do(() => cmd.run([]))
    .it('runs hello', (ctx) => {
      expect(ctx.stdout).to.contain('hello world');
    });

  test
    .stdout()
    .do(() => cmd.run(['--name', 'jeff']))
    .it('runs hello --name jeff', (ctx) => {
      expect(ctx.stdout).to.contain('hello jeff');
    });
});
