let count = 0;
let results = [];

function fibonacci(n) {
  count++;
  if (n <= 2) {
    results.push(1);
    return 1;
  }
  let fib = fibonacci(n-1) + fibonacci(n-2);
  results.push(fib);
  return fib;
}

console.log("The Fibonacci sequence for n = 5 is: " + fibonacci(5));
console.log("Function was called: " + count + " times.");
console.log("Results: " + results);
