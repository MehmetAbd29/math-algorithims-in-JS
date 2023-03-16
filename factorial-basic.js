// the basic way in which we find the factorial is building up the numbers from 1 until we reach the nth number!

// assume the input is a number that's greater than 0, integer. No need to validate user input

// this basic implemntation is an O(n), another recursive solution also exists.

function factorial(numb) {
  let endValue = 1;
  for (let i = 2; i <= numb; i++) {
    endValue *= i;
  }

  return endValue;
}

console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(10)); // 3628800
