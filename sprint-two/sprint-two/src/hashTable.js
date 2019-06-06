/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

/* var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
 */
/*
 * Complexity: What is the time complexity of the above functions?
 */


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % max); //negative numbers will break stuff!
};

// hashtable
// O(1) time-complexity
HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  // if bucket contains a value that does not exist
  // in hash table, create a bucket.  set an index and an empty bucket
  if (bucket === undefined) {
    bucket = [];
    this._storage.set(i, bucket);
  } else {
    for (var i = 0; i < bucket.length; i++) {
			// each bucket element can have multiple objects
			// set a variable, 'tuple', to represent each tuple
			tuple = bucket[i];
      if (tuple[0] === k) {
				var oldValue = tuple[1];
        tuple[1] = v;
				return oldValue;
      }
    }
  }
	
	bucket.push([k, v]);
	this._storage.set(i, bucket);
	this._size++;
	
	if(this._size > this._limit * 0.75) {
		this._resize(this.limit * 2);
	}
	
	return undefined;
};

// O(1) time-complexity
HashTable.prototype.retrieve = function(k) {
	console.log('attempting retrieval...');
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

	for (var i = 0; i < bucket.length; i++) {
		var tuple = bucket[i];
		if(tuple[0] === k) { // if key found
			return tuple[1]; // return its value
		}
	}
	
	return undefined;
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
	// instantiate bucket to be the value we are looking for
	var bucket = this._storage.get(i) || [];
	// iterate through the bucket's contents to find 'k'
	for (var i = 0; i < bucket.length; i++) {
		// instantiate a tuple for each bucket element
		var tuple = bucket[i];
		if (tuple[0] === k) { // found 'k'
			// remove bucket element using splice
			bucket.splice(i, 1);
			this._size--;
			// after removal, check if the size of hashtable
			// needs resizing for increased efficiency
			if (this._size < this._limit * 0.25) {
				this._resize(Math.floor(this._limit / 2));
			}
			return tuple[1];
		}
	}
	
	return undefined;
};

var ht = new HashTable();
ht.insert('dog', 'happy');
ht.insert('cat', 'feisty');
ht.insert('bat', 'scary');
console.log(ht.retrieve('dog'));
console.log(ht.retrieve('cat'));
console.log(ht.retrieve('bat'));
console.log(ht.remove('d0g'));


/*
 * Complexity: What is the time complexity of the above functions?
 */


