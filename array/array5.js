










function maxWater(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        maxWater = Math.max(maxWater, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

// Test the function
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxWater(height)); // Output: 49
