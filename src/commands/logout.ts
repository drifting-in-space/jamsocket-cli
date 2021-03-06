import { Command } from '@oclif/core'
import { deleteJamsocketConfig } from '../jamsocket-config'

export default class Logout extends Command {
  static description = 'Logs out of Jamsocket and removes locally-stored credentials.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {}
  static args = []

  public async run(): Promise<void> {
    deleteJamsocketConfig()
    this.log('Removed login credentials')
  }
}
