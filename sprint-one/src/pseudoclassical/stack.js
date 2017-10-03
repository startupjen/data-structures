var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0
};

Stack.prototype.push = function(string) { this[this.count++] = string }

Stack.prototype.pop = function() {
  this.count === 0 ? null: this.count--
  return this[this.count]
}

Stack.prototype.size = function() {
  return this.count
}