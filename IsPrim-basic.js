// Primality Test
// we need to check if an input number is prime or not
// a prime number is a number that only accepts division by itself or 1
// for example 1 is a prime number, 2 is prime, 3 is prime
// 4 is not a prime, since 4/2 = 2
// 6, 8,9,10,12,14,15,16,18,... etc are not
// notice that all even numbers (except 2) are not prime
// so if it's even, directly return false
// then we need to test the odd values :D

function isPrime(numb) {
  // check if it's even and NOT 2
  if (numb % 2 == 0 && numb !== 2) return false;

  // one solution for the odds is to divide the number with every possible
  // that comes before it until we reach the number. This solution is an o(n)
  // to get rid of all even variations, make the step 2 instead of 1
  // it's still o(n), but a better optimization for a smaller input value
  // we have n/2, not n steps. (again for lim n ot lim n/2, if n goes to infinity, they're the same)

  for (let i = 3; i < numb; i += 2) {
    if (numb % i === 0) return false;
  }

  return true;
}

console.log(isPrime(1)); // true
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(9)); // false
console.log(isPrime(10)); // false
console.log(isPrime(21)); // false
console.log(isPrime(23)); // true
console.log(isPrime(101)); // true
console.log(isPrime(1000)); // false
