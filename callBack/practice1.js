function inputData(input, callback) {
    return callback(input);
}
function toUpperCase(word) {
    return word.toUpperCase();
}
console.log(inputData("Hello World", toUpperCase));
