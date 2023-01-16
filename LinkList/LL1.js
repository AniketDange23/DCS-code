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
  
    arrayToList(arr) {
      let current = null;
      for (let i = 0; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        if (this.head === null) {
          this.head = newNode;
          current = newNode;
        } else {
          current.next = newNode;
          current = newNode;
        }
      }
    }
  }
  
  let list = new LinkedList();
  list.arrayToList([1, 9, 0, 7, 5]);
  console.log(list);
  