const { pipeline } = require('stream');
const fs = require('fs');
const Transform = require('stream').Transform;
const commander = require('commander'); // include commander in git clone of commander repo
const program = new commander.Command();
program
    .option('-i, --input <type>', 'input file')
    .option('-o, --output <type>', 'output file')
    .option('-s, --shift <type>', 'number shift')
    .option('-a, --action <type>', 'encode/decode')


program.parse(process.argv);
const options = program.opts();
let readableStream = fs.createReadStream(`${options.input}`);
let writeableStream = fs.createWriteStream(`${options.output}`);

function encodeCaesar(offset, data){
        let charArray = data.split('');
        shift = Number(offset);
        let result = charArray.map( function(char) { return shiftChar( char, shift ); }).join('');

        function shiftChar(char, shift){
            let isAlpha = /[A-z]/;

            if(isAlpha.test(char)){
                if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
                    char = String.fromCharCode(char.charCodeAt(0) + shift);
                    if (char > 'Z' && char < 'a' || char > 'z') {
                        char = String.fromCharCode(char.charCodeAt(0) - 26);
                    }
                }
            }
            return char;
        }
        return result;
}

function decodeCaesar(offset, data){
    let charArray = data.split('');
    shift = Number(offset);
    let result = charArray.map( function(char) { return shiftChar( char, shift ); }).join('');

    function shiftChar(char, shift){
        let isAlpha = /[A-z]/;

        if(isAlpha.test(char)){
            if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
                char = String.fromCharCode(char.charCodeAt(0) - shift);
                if (char >= 'Z' && char < 'a' || char > 'z' || char < 'A') {
                    char = String.fromCharCode(char.charCodeAt(0) + 26);
                }
            }
        }
        return char;
    }
    return result;
}

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        let data = chunk.toString();
        let resultTransform;
        if (options.action === "encode") {
            resultTransform = encodeCaesar(options.shift, data);
        }
        if (options.action === "decode") {
            resultTransform = decodeCaesar(options.shift, data);
        }
        callback(null, resultTransform);
    },
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










