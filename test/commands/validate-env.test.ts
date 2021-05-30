import { expect, test } from '@oclif/test';
import { describe } from 'mocha';
import * as lookpath from 'lookpath';
import Sinon from 'sinon';

describe('validate-env', () => {
  test
    .stdout()
    .command(['validate-env'])
    .it('does not error if git is installed', (ctx) => {
      expect(ctx.stdout).to.contain('Environment is ready to run this tool.');
    });

  context('when git is not installed', () => {
    beforeEach(() => {
      Sinon.stub(lookpath, 'lookpath').withArgs('git').resolves(undefined);
    });

    test.command(['validate-env']).exit(2).it('errors if git is not installed');
  });
});
