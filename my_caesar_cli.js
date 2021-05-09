const { pipeline } = require('stream');
const fs = require('fs');
const transform = require('./myModule/transform');
const option = require('./myModule/argvConsole');

//const { encodeCaesar } = caesar;
let readableStream = fs.createReadStream(`${option.options.input}`);
let writeableStream = fs.createWriteStream(`${option.options.output}`);

pipeline(
    readableStream,
    transform.transform,
    writeableStream,
    (err) => {
        if (err) {
            console.error('Pipeline failed.', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);










