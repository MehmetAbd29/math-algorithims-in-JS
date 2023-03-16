// solving the factorial problem using recusion

// recursion always require a base case, so that we can exit the recrusion and not enter an infinite loop!

function factorial(numb) {
  // start with the base condition
  if (numb === 1) return 1;

  // now we will call return with the numb * factorial(numb - 1)
  // this will be a loop, where for 5, we get: 5 * factorial(4), and 4 calls 4 * factorial(3), 3 * factorial(2), 2 * factorial (1), we reached base, 1 --> thus: 5 * 4 * 3 * 2 * 1

  return numb * factorial(numb - 1);
}

// in every function call, we have o(1), but because we're calling it n times --> n*o(1) --> thus o(n)
// meaning that recursion didn't improve the time complex., sometimes they give better results, sometimes not (memoization to the help)

console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(10)); // 3628800
