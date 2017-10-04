

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index) || []

  if (bucket.length === 0) {
    bucket = [[k,v]]
  } else {
    for (let tuple of bucket) {
      if (k === tuple[0]) {
        tuple[1] = v
      } else {
        bucket.push([k,v])        
      }
    }
  }
  this._storage.set(index, bucket)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index)

  if (bucket.length === 1) {
    return bucket[0][1]
  } else {
    for (let tuple of bucket) {
      if (k === tuple[0]) {
        return tuple[1]
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index)

  if (bucket.length === 1) {
    bucket.splice(0,1)
  } else {
    for (let tupleIndex of bucket) {
      if (k === tupleIndex[0]) {
        bucket.splice(tupleIndex,1)
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


