// functional-style BST

var BinarySearchTree = function(value) {
	var binaryTree = Object.create(binaryTreePrototype);
	binaryTree.value = value; // root-node
	binaryTree.left = null; // left-child 
	binaryTree.right = null; // right-cihld
	
	return binaryTree;
};

var binaryTreePrototype = {};


// O(log n) time complexity
binaryTreePrototype.insert = function (value) {
 // check left-child
  if (value < this.value) {
    if (this.left === null){ // if left is empty
      this.left = BinarySearchTree(value); // create node
    } else {
      this.left.insert(value);
    }
  } else { // check right-child
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } 
}

// O(log n) time complexity
binaryTreePrototype.contains = function (value) {

	if (value === this.value) {
		return true;
	} else if (value < this.value) {
		return !!(this.left && this.left.contains(value));
	} else if (value > this.value) {
		return !!(this.right && this.right.contains(value));
	}
};

// O(n) time complexity
binaryTreePrototype.depthFirstLog = function (callBack) {
	callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  } 
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
	
}

var bst = new BinarySearchTree(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(6);
console.log(bst);
console.log(bst.contains(1));


/*
 * Complexity: What is the time complexity of the above functions?
 */
