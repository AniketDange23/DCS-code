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
  
    deleteDuplicates() {
      let current = this.head;
      let set = new Set();
      let prev = null;
      while (current) {
        if (set.has(current.data)) {
          prev.next = current.next;
        } else {
          set.add(current.data);
          prev = current;
        }
        current = current.next;
      }
    }
  }
  let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(2);
list.head.next.next.next.next = new Node(1);

console.log("Original Linked List: 1->2->3->2->1");
list.deleteDuplicates();
console.log("Linked List after deleting duplicates: ");
let current = list.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
