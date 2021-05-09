const caesar = require('./caesar');
const option = require('./argvConsole');
const Transform = require('stream').Transform;
const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        let data = chunk.toString();
        let resultTransform;
        if (option.options.action === "encode") {
            resultTransform = caesar.encodeCaesar(option.options.shift, data);
        }
        if (option.options.action === "decode") {
            resultTransform = caesar.decodeCaesar(option.options.shift, data);
        }
        callback(null, resultTransform);
    },
});

module.exports.transform = myTransform;