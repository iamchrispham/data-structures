var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node unappended with value
	  var node = new Node(value);
	  // first reference tail.next to the new node
	  if (list.tail) {
      list.tail.next = node;
      // otherwise reference head of empty list to new node
    } else {
      list.head = node;
    }

    list.tail = node;
    };

  list.removeHead = function() {
    var temp;
      if (list.head) {
        temp = list.head;
        list.head = list.head.next;
        delete temp;
        return temp.value;
      }
  };

  list.contains = function(target) {
    // traverse from head if it exists
    // if the head exists, and its value is not the target
      if (list.head && list.head.value !== target) {
        // point tail to head
        list.tail = list.head;
        // traverse through list
        while (list.tail.next !== null) {
          if (list.tail.value === target || 
            list.tail.next.value === target){
            return true;
          }
          list.tail = list.tail.next;
        }
      }
      else { // if head value exists and its value is the target
        return true;
      } // if head does not exist and value is not found if list does exist
      return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = new LinkedList();
linkedList.addToTail(4);
linkedList.addToTail(5);
console.log(linkedList.contains(4));
console.log(linkedList.contains(5));
console.log(linkedList.contains(6));
/*
 * Complexity: What is the time complexity of the above functions?
  list.addToTail will have a time complexity of O(n), where n is the number of nodes to traverse through before adding to the tail
  list.removeHead will have O(1) time complexity, removing the head and repointing the list.head to the head of the list
  list.contains will have O(n) complexity, searching through the list of 'n' number of nodes for a specific target
  
 */
