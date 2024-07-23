function RevString (word : string ):string {
    let revWord = '';
    for (let i = word.length -1 ; i >=0; i--){
        revWord +=word[i];
    }
    return revWord;
}
const Reverse = RevString('Anaiba');
console.log(Reverse);