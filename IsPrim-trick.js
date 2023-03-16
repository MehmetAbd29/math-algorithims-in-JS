// refer to the IsPrime-basic, before you open this one

// There's a trick with prime numbers, a math trick not coding
// every number that is not a prime has a product that consists of two factors a & b, both are neither 1 nor the number itself
// 9 is 3*3, 14 is 7*2, 25 is 5*5, do you see?

// at least one of the factors is smaller or equal to the square root of the number!
// back to 14 which is 7*2, 14^0.5 is 3.72, 55^0.5 is 7.25, which means if we iterate up to the square root of the number, we are cutting our bath by n^0.5!!

function isPrime_trick(numb) {
  // check if it's even and NOT 2
  if (numb % 2 == 0 && numb !== 2) return false;

  // one solution for the odds is to divide the number with every possible
  // that comes before it until we reach the SQAURE ROOT of the number. This solution is an o(n^0.5)
  // to get rid of all even variations, make the step 2 instead of 1

  for (let i = 3; i <= Math.sqrt(numb); i += 2) {
    if (numb % i === 0) return false;
  }

  return true;
}

console.log(isPrime_trick(1)); // true
console.log(isPrime_trick(2)); // true
console.log(isPrime_trick(3)); // true
console.log(isPrime_trick(4)); // false
console.log(isPrime_trick(5)); // true
console.log(isPrime_trick(9)); // false
console.log(isPrime_trick(10)); // false
console.log(isPrime_trick(21)); // false
console.log(isPrime_trick(23)); // true
console.log(isPrime_trick(101)); // true
console.log(isPrime_trick(1000)); // false
