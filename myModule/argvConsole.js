const commander = require('commander'); // include commander in git clone of commander repo
const program = new commander.Command();
program
    .option('-i, --input <string>', 'input file')
    .option('-o, --output <string>', 'output file')
    .option('-s, --shift <integer>', 'number shift')
    .option('-a, --action <string>', 'encode/decode')


program.parse(process.argv);
const options = program.opts();
module.exports.options = options;