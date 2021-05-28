function twoNumberSum(array, targetSum) {
  // Write your code here.
  // for each number in the array, add it to every other number in the array individually
  // track the current index, skip the iteration where you'd add that number to itself
  // if those two numbers = targetSum, push them into an array and return them
  // return an empty array
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
