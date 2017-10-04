var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  for (let method in treeMethods) {
    newTree[method] = treeMethods[method]
  }

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value))
};

treeMethods.contains = function(target, node = this, hasTarget = false) {
  node.value === target ? hasTarget = true : node.children.forEach( (child) => hasTarget = hasTarget + this.contains(target, child, hasTarget) )
  return !!hasTarget
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
