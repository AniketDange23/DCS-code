
// Write a Program to check if a given string is in the Flat case or not.Flat
// case:Asthenameimplies,flatcasereferstotheuseoflowercaseletters, with no spaces between words.
// Example: Input: 'JavaScriptExercises''javascriptexercises'
// Output: falsetrue

function isFlatCase(string) {
    return string === string.toLowerCase() && !string.includes(" ");
}

console.log(isFlatCase("JavaScriptExercises")); // false
console.log(isFlatCase("javascriptexercises")); // true
