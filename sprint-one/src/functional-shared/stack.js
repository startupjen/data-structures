var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let storage = { last: 0 }
  for (let method in stackMethods) { storage[method] = stackMethods[method] }
  return storage
}

var stackMethods = {
  push: function(string) {
    this[this.last] = string
    this.last++
  },

  pop: function() {
    this.last === 0 ? null: this.last--
    return this[this.last]
  },

  size: function() {
    return this.last
  }

}