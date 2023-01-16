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
  
    isPalindrome() {
      // Find the middle of the list
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      // Reverse the second half of the list
      let prev = null;
      let current = slow;
      while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      // Compare the first and second half of the list
      let first = this.head;
      let second = prev;
      while (second) {
        if (first.data !== second.data) {
          return false;
        }
        first = first.next;
        second = second.next;
      }
      return true;
    }
  }
  let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(2);
list.head.next.next.next.next = new Node(1);

console.log("Is the linked list a palindrome?", list.isPalindrome());
