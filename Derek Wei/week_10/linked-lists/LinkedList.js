class Node{
    constructor(data){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
      this.data = data;
      this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        // a Linked List starts with a "head" property intialized as null
      this.head = head;
      this.tail = this.head;
      this.length = 0;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
      const newNode = new Node(data);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
      const newNode = new Node(data);

      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    pop(){
        // removes the last node from the list and returns it
      const popped = this.tail;
      this.tail = null;
      this.length--;
      return popped;
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
      const removedHead = this.head;
      this.head = this.head.next;
      this.length--;
      return removedHead;
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head

      if (X >= this.length) {
        this.appendNode(data);
      } else if (X <= 0) {
        this.prependNode(data);
      }

      const newNode = new Node(data);

      let count = 0;
      let prevNode = this.head;
      let nextNode = prevNode.next;

      while(count < X) {
        prevNode = prevNode.next;
        nextNode = prevNode.next;
        count++;
      }

      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

module.exports = {
    Node,
    LinkedList
}
