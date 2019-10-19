const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

clear();

console.log(
  chalk.blue(
    figlet.textSync('bllago-cli', { horizontalLayout: 'full' })
  )
);