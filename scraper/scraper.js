#!/usr/bin/env node

var Nightmare = require('nightmare');
var program = require('commander');

program
  .version('0.0.1');

program.parse(process.argv);
