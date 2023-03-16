/// the function takes an array of numbers and returns the smallest number inside of it
//

function minNumb(arr) {
  let minNum = arr[0];
  for (let num of arr) {
    // if the current number is smaller than minNum, set minNum to that number, else do nothing.
    num < minNum ? (minNum = num) : null;
  }

  return minNum;
}

console.log(minNumb([1, 5, 9, -2, 3, 0, -100]));
