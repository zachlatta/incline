#!/usr/bin/env node

var program = require('commander');
var db = require('../db');

var chase = require('./chase.js');

var banks = {
  'chase': chase
};

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

    var bank = banks[program.bank];

    if (!bank) {
      console.error('Invalid bank! Valid banks are: ' +
                    Object.keys(banks).join(','));
      process.exit(1);
    }

    bank.transactions()
      .then(function () {
        console.log('Done!');
      });
  });

db.connect(dbURL, function (err) {
  program.parse(process.argv);
});
