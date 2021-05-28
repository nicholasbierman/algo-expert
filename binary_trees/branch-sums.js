// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Time = O(n) because we have to traverse each node, but only perform
// constant time operations
// Space = O(n), affected by sums array and recursive nature of algorithm
// multiple recursive function calls on the call stack at once
// space complexity of recursive calls is log(n)
// branch sums has a length = number of branches in binary tree = number of leaf nodes in binary tree = roughly half of nodes in binary tree
function branchSums(root) {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  // if we hit a leaf node, add node.value to runningSum and push into sums
  // at every node, runningSum will be a sum of all the nodes above it
  if (!node) return;
  let newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
