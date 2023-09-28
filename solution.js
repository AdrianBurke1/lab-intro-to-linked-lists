const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
 
  insert(data) {
    const newNode = new Node(data);
    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

    size(){
      let count = 0;
      let current = this.head;
      while(current){
        count++
        current = current.next
      }
      return count;
    }

}

module.exports = {
  Node,
  LinkedList,
};
