#!/usr/bin/env node

// eslint-disable-next-line no-unused-vars
const colors = require('colors')
const yargs = require('yargs')
const { checkUserMiddleware, solutionMiddleware } = require('./helpers')

yargs // eslint-disable-line no-unused-expressions
  .commandDir('cmds')
  .demandCommand(1, '')
  .fail((msg, err) => {
    if (err) {
      console.error(`An error has occured: ${err.message}`.red)
      console.error(`Callstack:\n`, err)
      process.exit(1)
    }

    yargs.showHelp()

    msg = msg ? `\n${msg}` : ''
    console.log(msg)
  })
  .middleware([checkUserMiddleware, solutionMiddleware])
  .help()
  .argv
