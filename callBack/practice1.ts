function inputData(inputUpperCase: string, inputLowerCase: string, callback) {
    return callback(inputUpperCase, inputLowerCase);
}

function toUpperCase(word1: string, word2: string) {
     console.log(word1.toUpperCase()); 
     console.log(word2.toLowerCase()); 

}

inputData("Hello World", "This is OZIl", toUpperCase); 