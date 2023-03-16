// determine whether an input number is power of two
// meaning: 8 is a power of two, 2^3
// while 5 is not

// first steps, all odd numbers are out the question
// then, we need to break the number (divide it by 2), until we either reach 2 or reach a number that's not divisable by 2 (i.e odd)

// first function:
function isPowerOfTwo(numb) {
  // get rid of all odds from the get go
  if (numb % 2 !== 0 || numb < 0) return false;

  // there's a debate about this..... you can either say in line 10 that numb < 1, or assume that 0 is a power of 2. This is math not coding logic.
  if (numb === 0) return true;

  // here we will store the number that we got from the division by 2
  let newNumb = numb;
  // we will continue looping and dividng until we either reach 1 (we exit out the loop and return true)
  // or until the newNum % 2 is not 0 (odd), then return false

  // this is an o(log n) time complex. since we need to break it n times. When you divide something multiple time, that's usually a log
  while (newNumb !== 2) {
    newNumb /= 2;
    if (newNumb % 2 !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(50));

// second function
function isPowerOfTwoSecond(numb) {
  if (numb < 1) return false;
  while (true) {
    if (numb / 2 === 1) {
      return true;
    }

    if (numb % 2 !== 0) {
      return false;
    } else {
      numb /= 2;
    }
  }
}

console.log("Here's the second function");
console.log(isPowerOfTwoSecond(8));
console.log(isPowerOfTwoSecond(16));
console.log(isPowerOfTwoSecond(50));
