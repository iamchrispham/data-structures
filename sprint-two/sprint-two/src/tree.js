var Tree = function(value) {
  var newTree = {};
  newTree.value = value; // root

  // your code here
  newTree.children = [];  // should start as an empty array to hold subtrees (objects)
  extend(newTree, treeMethods);
  return newTree;
};


var extend = function (to, from) {
  for (key in from) {
    to[key] = from[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
	var node = new Tree(value);
	this.children.push(node);
};

treeMethods.contains = function(target) {
  var bool = false;
  var recurse = function (currNode) {
      for (var i = 0; i < Object.keys(currNode).length; i++) {
        if (currNode.value === target) {
 
          bool = true;
        } else {
          if (currNode.children[i] !== undefined)
            recurse(currNode.children[i]);
        }       

      }
    }

  recurse(this);
  return bool;
};

var tree = new Tree(5);
tree.addChild(6);
tree.addChild(7);
tree.children[0].addChild(8);
tree.children[1].addChild(9);
tree.children[0].children[0].addChild(10);
console.log(tree.contains(10));


/*
 * Complexity: What is the time complexity of the above functions?
 * add.Child will be complexity O(1).
 * extend O(n)
 * contains O(n)
 */
