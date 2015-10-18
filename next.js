#!/usr/bin/env node

var exec = require('child_process').exec
var argv = process.argv.slice(2)
var steps = 1 + ~~(argv.shift())
var branch = argv.shift() || 'master'

exec('git log --reverse --pretty=%H ' + branch, 
  function (err, commits) {
    if (err) return console.error(err)
    commits = commits.trim().split('\n')
    exec('git rev-parse HEAD', function (err, head) {
      var target = commits[commits.indexOf(head.trim()) + steps]
      if (!target) return console.error('end')
      exec('git checkout ' + target).stderr.pipe(process.stdout)
    })
  })

