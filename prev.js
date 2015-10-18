#!/usr/bin/env node

var exec = require('child_process').exec

var steps = 1 + ~~(process.argv.slice(2).shift())

exec('git checkout HEAD~' + steps, function (err, _, status) {
  if (err) {
    if (err.code === 1 && /did not match/.test(err.message)) 
      return console.log('start')
    return console.log(err)
  }
  console.log(status.trim())

})