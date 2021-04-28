import { Command } from 'commander/esm.mjs';
// (normal include)
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information');

program.parse();

// const options = program.opts();
// console.log('you ordered a pizza with:');
// if (options.peppers) console.log('  - peppers');
// const cheese = !options.cheese ? 'no' : options.cheese;
// console.log('  - %s cheese', cheese);
