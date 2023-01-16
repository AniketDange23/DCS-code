let input = "Virat Kohli"; // Declare a variable to store the input string
let words = input.split(" "); // Split the input string into an array of words
let abbreviation = ""; // Declare a variable to store the abbreviated form

for (let i = 0; i < words.length; i++) { // Iterate over each word in the array
  if (i === 0) {  // if this is the first word
    abbreviation += words[i]; // add it to abbreviation as it is
  } else {
    abbreviation += " " + words[i][0] + "."; // for the rest of the words add the first letter and a dot
  }
}
console.log(abbreviation); // Output the abbreviated form

