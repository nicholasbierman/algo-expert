function inOrderTraverse(tree, array) {
  // left, self, right
  // traverse left node
  // grab current node's value and add it to array
  // traverse right node
  let current = tree;
  current.left && inOrderTraverse(current.left, array);
  array.push(current.value);
  current.right && inOrderTraverse(current.right, array);
  return array;
}

function preOrderTraverse(tree, array) {
  let current = tree;
  array.push(current.value);
  current.left && preOrderTraverse(current.left, array);
  current.right && preOrderTraverse(current.right, array);
  return array;
}

function postOrderTraverse(tree, array) {
  // left, right, self
  let current = tree;
  current.left && postOrderTraverse(current.left, array);
  current.right && postOrderTraverse(current.right, array);
  array.push(current.value);
  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
