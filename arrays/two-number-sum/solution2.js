function twoNumberSum(array, targetSum) {
  // Write your code here.
  // sort the input array
  // left pointer at first index
  // right pointer at last index
  // add the two pointers
  // if currentSum < targetSum, move left pointer to the right
  // if currentSum > targetSum, move right pointer to the left
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) return [array[left], array[right]];
    if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
