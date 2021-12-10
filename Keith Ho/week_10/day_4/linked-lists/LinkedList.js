class Node{
    constructor(data, next){
        // a Node starts with a given data property
        // a Node also has a .next property initialized as null
      this.data = data;
      this.next = null;
    }
}

class LinkedList{
    constructor(head){
        // a Linked List starts with a "head" property intialized as null
      this.head = null;
    }
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
      let newNode = new Node(data);

      if (this.head === null){
        this.head = newNode;
        return this.head;
      } else {
        let tail = this.head;
        while (tail.next !== null){
          tail = tail.next;
        }
        tail.next = newNode;

        return this.head;
      }
    }
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;

        return this.head;
    }
    pop(){
        // removes the last node from the list and returns it
        if (this.head === null){
          return;
        } else if (this.head.next === null ){
          this.head = null;
          return;
        } else {
          let previousNode = this.head;
          let tail = this.head.next;
          while (tail.next !== null){
            previousNode = tail;
            tail = tail.next;
          }
          tail = null;
          return previousNode;
        }
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
        if (this.head === null){
          return;
        } else {
          this.head = this.head.next;
          return this.head;
        }
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head

        if (this.head === null){
          this.head = new Node(data, this.head);
          return;
        }
        const nextNode = this.getAt(X + 1);
        let newNode = new Number(data);
        newNode.next = nextNode.head;
        nextNode.head = newNode;

        return this.head;

    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
      if (!this.head) {
           this.head = new Node(data);
           return;
       }

      if (index === 0) {
          this.head = this.head.next;
          return;
      }

      const previous = this.getAt(index - 1);

      if (!previous || !previous.next) {
          return;
      }

      previous.next = previous.next.next;
      return this.head
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

const getAt = function(index){
  let count = 0;
  let node = this.head;
  while (node){
    if (count === index){
      return node;
    }
    count ++;
    node = node.next;
  }
  return null;
};

module.exports = {
    Node,
    LinkedList
}
