const Stack = function() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {}
  let count = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count++
  }

  someInstance.pop = function() {
    count === 0 ? null : count--
    return storage[count]
  }

  someInstance.size = function() {
    return count
  }

  return someInstance;
}
