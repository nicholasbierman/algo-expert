// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value, parent = null) {
    let current = this;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        if (current.left && current.right) {
          current.value = current.right.getMinValue();
          current.right.remove(current.value, current);
        } else if (!parent) {
          if (current.left) {
            current.value = current.left.value;
            current.right = current.left.right;
            current.left = current.left.left;
          } else if (current.right) {
            current.value = current.right.value;
            current.left = current.right.left;
            current.right = current.right.right;
          } else {
            // This is a single-node tree; do nothing.
          }
        } else if (parent.left === current) {
          parent.left = current.left !== null ? current.left : current.right;
        } else if (parent.right === current) {
          parent.right = current.left !== null ? current.left : current.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// Do not edit the line below.
exports.BST = BST;
