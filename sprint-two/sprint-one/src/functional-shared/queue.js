var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);
  
  return someInstance;
};

var extend = function (to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
}

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.storage[value] = value;
}

queueMethods.dequeue = function () {
  if (Object.keys(this.storage).length > 0){
    var temp = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return temp;
  } else {
    return "Empty queue";
  }
}

queueMethods.size = function () {
	return Object.keys(this.storage).length;
}

queueMethods.front = function () {
	return Object.keys(this.storage).length > 0 ? this.storage[Object.keys(this.storage)[0]] : "Empty queue";
}

queueMethods.back = function () {
	return Object.keys(this.storage).length > 0 ? this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]] : "Empty queue";
}