var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
	  if (size === 0) {
      size = 1;
      storage[1] = value;
    }
    else {
      size++;
      storage[size] = value;
    }
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      return storage[size+1];
    } else {
      return "Empty stack";
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};