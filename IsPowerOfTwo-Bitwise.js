// this uses Bitwise, and probably more than 50% of developers don't know how to work with bitwise
// because very few people use them and the only way you can think of this solution is if you googled it or you work with bitwise
// 99% of the chances, this solution won't be something an interviewer will think you can come up with on the spot
// and if he/she did think that, they're either stupid or worse.... so run away from that company and don't look back.

// so let me explain the binary system before we go to the solution:
// unsigned power of two always have just one bit! 1 is 1, 2 is 10, 4 is 100. (lookup Decimal to binary converter on google)
// this is a pattern.

// so we can use this logic in our alogrihim, a bitwise operation can be used to check if a number is a power of two
// numb & (numb - 1) === 0 // if true, it's a power of two. Since 4 & 3 = 0
// this & bitwise, 4 is => 100, 8 is 1000. so
// 0100 --> 4
// 1000 --> 8
// & will compare the values column by column (left to right) for the first column we have 0 and 1 --> gives 0 and for 0& 0 you get zero
// you only get one for 1&1
// thus 4 & 8 will give you a 0 in the end. (0000)
// now a 7 is 111
// 100
// 111
// we get 100 --> which is a 4
// when we compare two evens with each other, the result is always 0, since they can never have 1 in the same position

function isPowerOfTwo(numb) {
  // o(1)
  if (numb < 1) return false;

  return (numb & (numb - 1)) === 0;
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(50));
console.log(isPowerOfTwo(10004867878544758666));
