var Queue = function() {
  var someInstance = {}

  // Use an object with numeric keys to store values
  var storage = {}
  let first = 0, last = 0
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value
    last++
  }

  someInstance.dequeue = function() {
    first < last ? first++ : null
    let dequeued = storage[first-1]
    delete storage[first-1]
    return dequeued
  }

  someInstance.size = function() {
    return last - first
  }

  return someInstance;
}
