function inputData(inputUpperCase, inputLowerCase, callback) {
    return callback(inputUpperCase, inputLowerCase);
}
function toUpperCase(word1, word2) {
    console.log(word1.toUpperCase());
    console.log(word2.toLowerCase());
}
inputData("Hello World", "This is OZIl", toUpperCase);
