// for memoization, we need to store it:

function fib(n, memo) {
  // let's check if fib ran before and see if we can take its value from memo
  if (memo[n]) {
    return memo[n];
  }

  // you can write this in an if-else form!
  let result = n === 1 || n === 0 ? 1 : fib(n - 1, memo) + fib(n - 2, memo);
  // the result is a helper variabl which will be stored in memo
  // now if called the fib for (2), we store it in memo[2], so 2 is a key, and the value is the fib outcome
  memo[n] = result;

  return result;
}

console.log(fib(2, {})); // 2
console.log(fib(3, {})); // 3
console.log(fib(4, {})); // 5
console.log(fib(10, {})); // 89

// now we're cutting the tree, by calling the functions only once!
// this is an o(n)
// we went from 2^n to n!!! with using memoization!
