class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addMiddle(element) {
      let newNode = new Node(element);
      // If the list is empty, set the new node as the head
      if (!this.head) {
        this.head = newNode;
        return;
      }
      // Find the middle of the list
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      // Set the new node's next to the current middle node
      newNode.next = slow.next;
      // Set the current middle node's next to the new node
      slow.next = newNode;
    }
  }
  let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);

console.log("Original Linked List: 1->2->3");
list.addMiddle(4);
console.log("Linked List after adding element 4 in the middle: ");
let current = list.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
