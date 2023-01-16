let input = "ABC, Hello World, 123";
let words = input.split(" ");
let reversedString = "";
for (let i = words.length - 1; i >= 0; i--) {
    reversedString += words[i] + " ";
}
console.log(reversedString);
