function findThreeLargestNumbers(array) {
  // create second array to contain 3 largest numbers
  // iterate over input array, keep track of current number
  // if current number > last index of second array, replace that index and shift other numbers left 1 index
  // Time => O(n) because we have to traverse entire array and perform constant time operations at each point in the array
  // Space => O(1) because we are only creating an array of 3 numbers
  let threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  // compare current number to 3rd value in threeLargest
  if (!threeLargest[2] || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (!threeLargest[1] || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (!threeLargest[0] || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array, num, index) {
  // index is last index in threeLargest that we want to update
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
