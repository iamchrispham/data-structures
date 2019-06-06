var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.sizeOf = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (val) {
	this.sizeOf++;
	this.storage[this.sizeOf] = val;
}

stackMethods.pop = function () {
	if (this.sizeOf > 0) {
		this.sizeOf--;
		return this.storage[this.sizeOf+1];
	} else {
		return "Empty stack";
	}
}

stackMethods.size = function () {
	return this.sizeOf
}

stackMethods.top = function () {
	return this.sizeOf > 0 ? this.storage[this.sizeOf] : "Empty stack";
}