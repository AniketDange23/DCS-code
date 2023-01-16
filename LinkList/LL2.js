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
  
    partition(x) {
      let current = this.head;
      let leftDummy = new Node();
      let leftTail = leftDummy;
      let rightDummy = new Node();
      let rightTail = rightDummy;
      while (current) {
        if (current.data < x) {
          leftTail.next = current;
          leftTail = current;
        } else {
          rightTail.next = current;
          rightTail = current;
        }
        current = current.next;
      }
      leftTail.next = rightDummy.next;
      rightTail.next = null;
      this.head = leftDummy.next;
    }
  }
  
  let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(9);
list.head.next.next = new Node(0);
list.head.next.next.next = new Node(7);
list.head.next.next.next.next = new Node(5);

console.log("Original Linked List: 1->9->0->7->5");
let partition_value = 5;
list.partition(partition_value);
console.log("Linked List after partitioning with x =", partition_value);
let current = list.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
