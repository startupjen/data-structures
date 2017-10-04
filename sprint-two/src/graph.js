

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = { value: node, edges: {}, toJSON: function() { return `node ${node}`} }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this) {
    if (this[key].value === node) {
      return true
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this) {
    if (this[key].value === node) {
      delete this[key]
      return
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var from, to
  this[fromNode] ? from = this[fromNode].edges[toNode] : from = null
  this[toNode] ? to = this[toNode].edges[fromNode] : to = null
  if (from && to) { return true } 
  else { return false } 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = toNode
  this[toNode].edges[fromNode] = fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode]
  delete this[toNode].edges[fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this) {
    if (typeof this[key] !== 'function') {
      cb(this[key].value)
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


