var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someQueue = {first: 0, last: 0}
  for (let method in queueMethods) { someQueue[method] = queueMethods[method] }
  return someQueue
}

var queueMethods = {
  enqueue: function(string) {
    this[this.last] = string
    this.last++
  },

  dequeue: function() {
    let dequeued = this[this.first]
    delete this[this.first]
    this.first === this.last ? null : this.first++
    return dequeued
  },

  size: function() {
    return this.last - this.first
  }
}


