var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
      storage[value] = value;
  };

  someInstance.dequeue = function() {
    if (Object.keys(storage).length > 0) {
      var temp = storage[Object.keys(storage)[0]];
      console.log('Dequeue', temp);
      delete storage[Object.keys(storage)[0]];
	  return temp;
    }
  };

  someInstance.size = function() {
	  return Object.keys(storage).length;
  };

  someInstance.front = function() {
    if (Object.keys(storage).length >= 0){
      return storage[Object.keys(storage)[0]];
    } else {
    return "Empty queue"
    }
  }

  someInstance.back = function () {
    if (Object.keys(storage).length >= 0) {
      return storage[Object.keys(storage).length];
    } else {
      return "Empty queue"
    }
  }
  return someInstance;
};