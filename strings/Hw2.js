// WriteaProgramtoremovethefirstoccurrenceofagiven'searchstring'fromastring.
//Example:- Input: "The quick brown fox jumps over the lazy dog", 'the'
//Output: "The quick brown fox jumps over lazy dog"

function removeFirstOccurrence(string, searchString) {
    const searchStringIndex = string.indexOf(searchString);
    if (searchStringIndex === -1) {
        return string;
    } else {
        return string.slice(0, searchStringIndex) + string.slice(searchStringIndex + searchString.length);
    }
}

console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", "the"));
