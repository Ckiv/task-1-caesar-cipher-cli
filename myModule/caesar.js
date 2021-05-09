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
module.exports.encodeCaesar = encodeCaesar;
module.exports.decodeCaesar = decodeCaesar;