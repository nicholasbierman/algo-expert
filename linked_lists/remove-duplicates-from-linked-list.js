// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // start at head node
  // look at next node to see if it's the same as the head
  // if it is, remove the node by
  // store current.next.next in temp variable
  // set current.next.next = null
  // set current.next = temp
  let current = linkedList;
  while (current) {
    let nextDistinct = current.next;
    while (nextDistinct && nextDistinct.value === current.value) {
      // iterate until we are no longer at a duplicate value
      nextDistinct = nextDistinct.next;
    }
    current.next = nextDistinct; // once we are no longer at a duplicate value,
    current = nextDistinct;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
