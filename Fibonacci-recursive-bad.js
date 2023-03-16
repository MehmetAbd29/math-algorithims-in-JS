// note, this is a very bad recursive implemntation for the Fibonacci sequence!
//

function fib(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  // remember fib: [1,2,3,5] --> 5 is fib(3) + fib(2), 3--> fib(2) + fib(1)
  // thus:
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(2)); // 2
console.log(fib(3)); // 3
console.log(fib(4)); // 5
console.log(fib(10)); // 89

// HOWEVER, https://miro.medium.com/v2/resize:fit:925/1*svQ784qk1hvBE3iz7VGGgQ.jpeg
// you have a nested tree of nested function calls
// fib 4 calls fin(3) and fib(2) --> and fib 2 calls (fib 1  and fib 0)
// fib 3 calls fib 2 and fib 1, again fib 2 calls fib1 and fib 0
// notice you're repeating the function calls for the SAME values over and over
// until you reach fib0 and fib1 where you start to sum the 1+1+1+1+1+1+1+1+1+, etc
// for 10, you ended up summing 1 for a total of 89 times, this is not including the other calls which reached the fib1 and fib 0
// this is a very bad algorthim with an 2^n Exponential Time, for 10--> you have 1024 steps!
// this can be solved with memoization. Meaning that we can refactor the code
// and make it remember (for example) fib2 value, thus we dont have to call fib2 everytime.
// the memoization (dynamic programming) solution will be in another file inside the repository
