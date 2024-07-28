function inputData(input:string, callback){
    return callback(input);
}

function toUpperCase(word:string){
    return word.toUpperCase();
}

console.log(inputData("Hello World", toUpperCase)); 