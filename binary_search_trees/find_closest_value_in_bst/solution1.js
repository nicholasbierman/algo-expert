function findClosestValueInBst(tree, target) {
  // compute absolute value of difference between current value and target value
  // compute absolute value of difference between closest value and target value
  // if distance between current and target < distance between closest and target, update closest to be current
  // compare target to current node
  // if target < currentNode, traverse left subtree
  // if target > currentNode, traverse right subtree
  // return closest value
  // edge case: if distance between current and target is 0, return closest immediately
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (!tree) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
