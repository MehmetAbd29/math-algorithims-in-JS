// The fibonacci ALWAYS starts with 1,1 and all other numbers are sum of the previous two numbers
// [1,1,2,3,5,8], here 8 is sum of 5+3.
// this is an actual pattern that exists in nature, the Fibonacci spiral (think of the water spiral, a sun flower, etc) Very famous in CFD modelling

// the basic solution for this problem, where we need to find the nth element of the fibonacci sequence is an O(n) where we simply build up the array until we reach the nth element:

// assume the input is always a positive integer or 0, no need to valdiate input
// n input counting starts from 0, so if we want the first element the user inputs a zero not a 1

function fib(n) {
  // incase we we're required to return the first of second index
  if (n === 1 || n === 0) {
    return 1;
  }

  // the array:
  const fibArray = [1, 1];
  // building the array, since we have a for loop, we have o(n) time complex.
  for (let i = 2; i <= n; i++) {
    // pust to the end of array o(1)
    const el = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(el);
    // you can get rid of const el and push the value directly,
    // but it's better to have a readable code than a shorthand code
    // don't be a smartass, no one likes a smartass :) I MEAN it.
  }

  return fibArray[n];
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
