var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.someInstance = {};
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
	this.storage[value] = value;
}

Queue.prototype.dequeue = function () {
	if (Object.keys(this.storage).length > 0) {
		var temp = this.storage[Object.keys(this.storage)[0]];
		delete this.storage[Object.keys(this.storage)[0]];
		return temp;
	} else {
	  return "Empty queue";
	}
}

Queue.prototype.size = function () {
	return Object.keys(this.storage).length;
}

Queue.prototype.front = function () {
	return this.storage[Object.keys(this.storage)[0]];
}

Queue.prototype.back = function () {
	return this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
}

var queue = new Queue();