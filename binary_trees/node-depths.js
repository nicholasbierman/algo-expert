// depth first search
// intialize a sum variable
// begin at root node
// recursively visit each node beneath the root
// if node.value is null, return
// add 1 to the sum
// if we hit a leaf node, return
// recursively visit node.left and node.right
// Space => O(h) where h is the height of the binary tree
// Time => O(N)

function nodeDepths(root, depth = 0) {
  // Write your code here.
  if (!root) return 0;
  return (
    depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
