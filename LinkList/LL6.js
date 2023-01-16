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
  
    reverseList() {
      let prev = null;
      let current = this.head;
      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }
  let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);

console.log("Original Linked List: 1->2->3");
list.reverseList();
console.log("Linked List after reversing: ");
let current = list.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
