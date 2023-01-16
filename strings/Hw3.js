//Write a Program to find a word within a string.Example:-
//  Input: 'The quick brown fox', 'fox'
//  Output: "'fox' was found 1 times."
// 
function findWord(string, word) {
    let count = 0;
    let startIndex = 0;
    while (true) {
        startIndex = string.indexOf(word, startIndex);
        if (startIndex === -1) {
            break;
        }
        count++;
        startIndex += word.length;
    }
    return `'${word}' was found ${count} time(s).`;
}

console.log(findWord("The quick brown fox jumps over the lazy dog", "fox"));
