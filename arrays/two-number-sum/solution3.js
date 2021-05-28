function twoNumberSum(array, targetSum) {
  // hash table
  // iterate through input array
  // at each index, check to see if the number needed to sum up to the target value is in hash table
  // Time => O(n) because we traverse the array only once and calculate potentialMatch at each index
  // Space => O(n) because we are adding values to a hash table
  let nums = {}; // { 3: true, 5: true, -4: true, 8: true, 11: true,   }
  for (const num of array) {
    let potentialMatch = targetSum - num; // 10 -
    if (potentialMatch in nums) {
      console.log("num", num);
      console.log("potentialMatch", potentialMatch);
      console.log(nums);
      return [num, potentialMatch];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
