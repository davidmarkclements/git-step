# git-step

CLI tool to step through git commits in either direction


## Why 

Useful for live tutorials, talks, etc.

## Install

```sh
npm i -g git-step
```

This will install `git-next` and `git-prev` executables, and
automatically alias them to `git next` and `git prev`.

## Usage

In a git repo

```sh
git prev <steps>
git next <steps> <branch>
```

All arguments are optional `steps` defaults to 1, branch defaults to master.

See caveats for why `prev` doesn't need a branch arg.

## Caveats

Turns out to be non-trivial to go next (whereas prev is real easy). 

In order to go next, we *must* know the branch - this defaults to master. 

If any knows an easy of getting the last branch accessed in a repo talk to me
(twitter [@davidmarkclem](http://twitter.com/davidmarkclem), or issue/PR ;)

## Credits

* Sponsored by [nearForm](http://nearform.com)