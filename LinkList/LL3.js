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
  
    findIntersection(list1, list2) {
      let head1 = list1.head;
      let head2 = list2.head;
      let len1 = 0;
      let len2 = 0;
  
      // Find the length of list1
      while (head1) {
        len1++;
        head1 = head1.next;
      }
  
      // Find the length of list2
      while (head2) {
        len2++;
        head2 = head2.next;
      }
  
      // Reset the head pointers
      head1 = list1.head;
      head2 = list2.head;
  
      // Move the head pointer of the longer list to the same distance
      // as the shorter list from the end
      if (len1 > len2) {
        let diff = len1 - len2;
        while (diff--) {
          head1 = head1.next;
        }
      } else {
        let diff = len2 - len1;
        while (diff--) {
          head2 = head2.next;
        }
      }
  
      // Traverse both lists until the intersection point is found
      while (head1 && head2) {
        if (head1 === head2) {
          return head1;
        }
        head1 = head1.next;
        head2 = head2.next;
      }
  
      // If no intersection point is found, return null
      return null;
    }
  }
  
let list1 = new LinkedList();
list1.head = new Node(1);
list1.head.next = new Node(2);
list1.head.next.next = new Node(3);
list1.head.next.next.next = new Node(4);

let list2 = new LinkedList();
list2.head = new Node(5);
list2.head.next = new Node(6);
list2.head.next.next = list1.head.next.next;

let intersectionNode = list1.findIntersection(list1, list2);
console.log("Intersection node is: ", intersectionNode.data);
