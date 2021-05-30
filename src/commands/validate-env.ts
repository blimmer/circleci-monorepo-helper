import { Command, flags } from '@oclif/command';
import { lookpath } from 'lookpath';

export default class ValidateEnv extends Command {
  static description = 'validates the circleci environment to ensure all dependencies are installed';

  static examples = [`$ circleci-monorepo-helper validate-env`];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [];

  async run(): Promise<void> {
    try {
      await this.validateCommandExists('git');
    } catch (e) {
      this.error(e);
    }

    this.log('Environment is ready to run this tool.');
  }

  private async validateCommandExists(command: string): Promise<boolean> {
    const commandPath = await lookpath(command);
    if (!commandPath) {
      throw new Error(`${command} is not installed!`);
    }

    return true;
  }
}
