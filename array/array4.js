// Write a Program to find common elements in k-sorted arrays.


function findCommonElements(arrays) {
    // Initialize an empty set to store unique elements
    let uniqueElements = new Set();
    // Initialize an empty set to store common elements
    let commonElements = new Set();
    // Iterate through each array
    for (let i = 0; i < arrays.length; i++) {
        // Iterate through each element of the current array
        for (let j = 0; j < arrays[i].length; j++) {
            // If the element is not in the unique elements set, add it
            if (!uniqueElements.has(arrays[i][j])) {
                uniqueElements.add(arrays[i][j]);
            } else {
                // If the element is already in the unique elements set,
                // add it to the common elements set
                commonElements.add(arrays[i][j]);
            }
        }
    }
    return Array.from(commonElements);
}

// Test the function
const arrays = [[1, 2, 3, 4, 5], [2, 4, 6, 8], [2, 3, 5, 7]];
console.log(findCommonElements(arrays)); // Output: [2, 3, 5]
