#!/usr/bin/env node

var Nightmare = require('nightmare');
var program = require('commander');
var db = require('../db');

var dbURL = process.env.DATABASE_URL;

if (!dbURL) {
  console.error('Error: DATABASE_URL environment variable not set!');
  process.exit(1);
}

program
  .version('0.0.1')
  .option('-B, --bank [bank]', 'Bank provider');

program
  .command('update-transactions')
  .action(function () {
    if (!program.bank) {
      console.error('Bank is required!')
      process.exit(1);
    }

    console.log('Updating transactions for ' + program.bank);
  });

db.connect(dbURL, function (err) {
  program.parse(process.argv);
});
