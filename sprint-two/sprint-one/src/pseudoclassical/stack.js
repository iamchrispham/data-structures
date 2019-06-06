var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
  this.sizeOf = 0;
};

Stack.prototype.push = function (val) {
	this.sizeOf++;
	this.storage[this.sizeOf] = val;
}

Stack.prototype.pop = function () {
  if (this.sizeOf > 0){
	  this.sizeOf--;
	  return this.storage[this.sizeOf+1];
  } else 
    "Empty stack";
}

Stack.prototype.size = function () {
	
	return this.sizeOf;
}

Stack.prototype.top = function () {
	
	return this.storage[this.sizeOf];
}

var Stack_1 = new Stack();