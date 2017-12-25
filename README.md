# beatnik
Flexible Musical Beat Stream Generator

## Install Node

Use one of the following to install node.js

  https://nodejs.org/en/
  curl http://npmjs.org/install.sh | sh

Use a package manager

  brew install node # see https://brew.sh/
  choco install nodejs # see https://chocolatey.org/

## Install Module

  npm i beatnik;
  const beatnik = require('beatnik');
  const song = beatnik({options});

## Notes

  Module returns a function used in generation of song
  Generator will return an array of objects with useful information
