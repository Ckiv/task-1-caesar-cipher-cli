const commander = require('commander'); // include commander in git clone of commander repo
const program = new commander.Command();

program
    .option('-i, --input <type>', 'input file')
    .option('-o, --output <type>', 'output file')
    .option('-s, --shift <type>', 'number shift')
    .option('-a, --action <type>', 'encode/decode')


program.parse(process.argv);

const options = program.opts();
if (options.input) console.log(options);
if (options.output) console.log(options);
if (options.shift) console.log(options);
if (options.action) console.log(`- ${options.action}`);
