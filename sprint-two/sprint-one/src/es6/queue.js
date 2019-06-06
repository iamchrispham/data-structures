class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
	  this.someInstance = {};
	  this.storage = {};
  }

  enqueue(value) {
	 this.storage[value] = value;
 }
 
  dequeue() {
	 if (Object.keys(this.storage).length > 0) {
	   var temp = this.storage[Object.keys(this.storage)[0]];
	   delete this.storage[Object.keys(this.storage)[0]];
	   return temp;
	 } else {
	   return "Empty queue";
	 }
 }
 
  size() {
	 return Object.keys(this.storage).length;
 }
 
  front() {
	 return this.storage[Object.keys(this.storage)[0]];
 }
 
  back() {
	 return this.storage[Object.keys(this.storage)[Object.keys(this.storage).length-1]];
 }
}
