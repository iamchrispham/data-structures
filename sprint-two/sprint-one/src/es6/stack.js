class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
	  this.someInstance = {};
	  this.storage = {};
	  this.sizeOf = 0;
  }

  push(val) {
	  this.sizeOf++;
	  this.storage[this.sizeOf] = val;
  }
  
  pop() {
	  if (this.sizeOf > 0) {
		  this.sizeOf--;
		  return this.storage[this.sizeOf+1];
	  } else {
		  return "Empty stack";
	  }
  }
  
  size() {
	  return this.sizeOf;
  }
  
  top() {
	 return this.storage[this.sizeOf]; 
  }
}

var stack = new Stack();
stack.push(5);
console.log(stack.top());