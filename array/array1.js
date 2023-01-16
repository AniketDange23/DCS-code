// Write a Program to find two array elements in an array that add up to a number



function findTwoElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

// Test the function
const arr = [3, 5, 2, -4, 8, 11];
const num = 7;
console.log(findTwoElements(arr, num)); // Output: [5, 2]
