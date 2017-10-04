var BinarySearchTree = function(value) {
  const binaryTree = Object.create(BinarySearchTree.prototype)
  binaryTree.value = value
  binaryTree.left = null
  binaryTree.right = null
  return binaryTree
};

BinarySearchTree.prototype.insert = function(value, node = this) {
  if (node.value > value && node.left === null) {
    node.left = BinarySearchTree(value)
  } else if (node.value < value && node.right === null) {
    node.right = BinarySearchTree(value)
  } else if (node.value > value) {
    node.insert(value, node.left)
  } else if (node.value < value) {
    node.insert(value, node.right)
  }
} 

BinarySearchTree.prototype.contains = function(value, node = this, containsValue = false) {
  if (node.value === value) {
    containsValue = true
  } else {
    if (node.left) {
      containsValue += node.contains(value, node.left)      
    }
    if (node.right) {
      containsValue += node.contains(value, node.right)      
    }
  }
  return !!containsValue
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value)
  if (this.left) { this.depthFirstLog.call(this.left, callback) }
  if (this.right) { this.depthFirstLog.call(this.right, callback) }
}

/*
 * Complexity: What is the time complexity of the above functions?
*/