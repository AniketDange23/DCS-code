// /WriteaProgramtofindthatoneelementinanon-emptyarrayofintegersnums,where every element appears twice except for one.


function findSingleElement(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

// Test the function
const nums = [1, 1, 2, 2, 3, 4, 4, 5, 5];
console.log(findSingleElement(nums)); // Output: 3
