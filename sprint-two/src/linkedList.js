var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null && this.tail === null) { //this.tail and this.head is null only on initial condition, and if it's emptied list
      this.head = Node(value)
      this.tail = this.head
    } else {
      this.tail.next = Node(value)
      this.tail = this.tail.next
    }
  };

  list.removeHead = function() {
    const prevHead = this.head
    this.head.next === null ? null : this.head = this.head.next
    return prevHead.value
  };

  list.contains = function(target) {
    let currentNode = this.head
    while(true) {
      if(currentNode.value === target) {
        return true
      } else if (currentNode.next === null) {
        return false
      } else {
        currentNode = currentNode.next
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
