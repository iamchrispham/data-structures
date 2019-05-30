var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeOf = 0;
  extend(someInstance, stackMethods);
  
  return someInstance;
};


var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
var stackMethods = {};

stackMethods.push = function (value) {
	this.sizeOf++;	
  //console.log(this);
	this.storage[this.sizeOf] = value;
}

stackMethods.pop = function () {
	if (this.sizeOf > 0){
	  this.sizeOf--;
	  return this.storage[this.sizeOf+1];
	} else {
	  return "Empty stack";
	}
}

stackMethods.size = function () {
	return this.sizeOf;
}

stackMethods.top = function () {
	return this.storage[this.sizeOf];
}

stackMethods.fun = function () {
  return "I am having fun coding!";
}