const { pipeline } = require('stream');
const fs = require('fs');
const Transform = require('stream').Transform;

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

let readableStream = fs.createReadStream('input.txt');
let writeableStream = fs.createWriteStream('output.txt');

// все стримы-трансформеры являются спаренными стримами
const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        console.log(chunk);
    }
});

pipeline(
    readableStream,
    myTransform,
    writeableStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);







/*const commander = require('commander'); // include commander in git clone of commander repo
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
if (options.action) console.log(`- ${options.action}`);*/


