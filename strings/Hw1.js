
// Write a Program to truncate a string to a certain number of words.

function truncateString(string, numWords) {
    const words = string.split(" ");
    if (numWords >= words.length) {
        return string;
    } else {
        return words.slice(0, numWords).join(" ") + "...";
    }
}

console.log(truncateString("The quick brown fox jumps over the lazy dog", 4));

