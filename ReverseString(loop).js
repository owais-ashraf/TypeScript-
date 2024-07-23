function RevString(word) {
    var revWord = '';
    for (var i = word.length - 1; i >= 0; i--) {
        revWord += word[i];
    }
    return revWord;
}
var Reverse = RevString('Anaiba');
console.log(Reverse);
