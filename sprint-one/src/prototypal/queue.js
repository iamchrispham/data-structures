/*
const newQueue = {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  someInstance: { storage: []},
  enqueue: function (value) {
	this.someInstance['storage'][value] = value;
  },
  dequeue: function () {
	if (Object.keys(this.someInstance['storage']).length > 0){
	  var temp = this.someInstance['storage'][Object.keys(this.someInstance['storage'])[0]];
	  delete this.someInstance['storage'][Object.keys(this.someInstance['storage'])[0]];
	  return temp;
	} else {
	  return "Empty queue";
	}},
  size: function () {
	return Object.keys(this.someInstance['storage']).length;
  },
  front: function () {
	return Object.keys(this.someInstance['storage']).length > 0 ? this.someInstance['storage'][Object.keys(this.someInstance['storage'])[0]] : "Empty queue";
  },
  back: function () {
	return Object.keys(this.someInstance['storage']).length > 0 ? this.someInstance['storage'][Object.keys(this.someInstance['storage'])[Object.keys(this.someInstance['storage']).length-1]] : "Empty queue";
  }
};
*/

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  
  return someInstance;
};


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

var queue = new Queue();