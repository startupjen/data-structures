var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let storage = Object.create(queueMethods)
  storage.first = 0
  storage.last = 0
  return storage
};

var queueMethods = {
  enqueue: function(string) {
    this[this.last++] = string
  },
  dequeue: function() {
    this.first === this.last ? null : this.first++
    return this[this.first - 1] 
  },
  size: function() {
    return this.last - this.first
  }
}


