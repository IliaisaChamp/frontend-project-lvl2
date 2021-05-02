import { Command } from 'commander/esm.mjs';
import makeCompareFiles from './src/main.js';

const program = new Command();
export default program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(makeCompareFiles(filepath1, filepath2, program.format));
  });
program.parse(process.argv);