var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0
  this.last = 0
};


Queue.prototype.enqueue = function(string) { this[this.last++] = string }

Queue.prototype.dequeue = function() {
  this.first === this.last ? null : this.first++
  return this[this.first - 1]
}

Queue.prototype.size = function() {
  return this.last - this.first
}