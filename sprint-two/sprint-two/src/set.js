var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage.push(item);
};

setPrototype.contains = function(item) {
	for (var i = 0; i < this._storage.length; i++) {
		if (item === this._storage[i]) {
			return true; 
		}
	}
	return false;
};

setPrototype.remove = function(item) {
	for (var i = 0; i< this._storage.length; i++) {
		 if (this._storage[i] === item){
			 console.log(`Deleting ${this._storage[i]} at index: ${i}`);
		   this._storage.splice(i, 1);
       console.log('New array:', this._storage);
		 }
	}
};

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
set.remove(1);
/*
 * Complexity: What is the time complexity of the above functions?
 add(item) is O(1)
 contains(item) is O(n)
 remove(item) is O(n)
 */
