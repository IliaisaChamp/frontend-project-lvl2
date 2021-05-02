#!/usr/bin/env node
import commander from 'commander';
import makeCompareFiles from '../src/index.js';

const program = commander.createCommand();
const genDiff = program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(makeCompareFiles(filepath1, filepath2, program.format));
  });

program.parse(process.argv);

export default genDiff;
