// Write a Program to find the median of two sorted arrays of the same size.


function findMedian(arr1, arr2) {
    let i = 0;
    let j = 0;
    let m1 = -1;
    let m2 = -1;
    let n = arr1.length;
    for (let count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = arr2[0];
            break;
        } else if (j == n) {
            m1 = m2;
            m2 = arr1[0];
            break;
        }
        if (arr1[i] < arr2[j]) {
            m1 = m2;
            m2 = arr1[i];
            i++;
        } else {
            m1 = m2;
            m2 = arr2[j];
            j++;
        }
    }
    return (m1 + m2) / 2;
}

// Test the function
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
console.log(findMedian(arr1, arr2)); // Output: 5.5
