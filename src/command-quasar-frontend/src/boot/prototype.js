import { Command } from '../models'

// Inject equality extension method

Object.defineProperty(Command.prototype, 'isEqual', {
  value: function isEqual (command) {
    return JSON.stringify(this) === JSON.stringify(command)
  },
  writable: true,
  configurable: true
})
