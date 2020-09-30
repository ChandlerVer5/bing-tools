import expect from 'expect'
import shellCommand from './index'
import { exec } from 'child_process'

global.MainRpc = { command_exec: exec }

describe('shellCommand', () => {
  it('resolved when command is ok', done => {
    shellCommand('ls').then(() => done())
  })

  it('rejected when command is failed', done => {
    shellCommand('lsssss').catch(() => done())
  })
})
