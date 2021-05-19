// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach((child) => {
      child.depthFirstSearch(array);
    });
    return array;
  }
}

// Time complexity => O(V + E) where V is the number of nodes in the graph and E is the number of edges connecting those nodes 
// O(V) because we traverse every vertex and add its name to the array
// On top of that, at every vertex we iterate through the children's nodes and call the depthFirstSearch function
// Space complexity => O(V) because we are storing an array of each node's name

// Do not edit the line below.
exports.Node = Node;
