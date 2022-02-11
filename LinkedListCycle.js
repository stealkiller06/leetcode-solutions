class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
}

let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next.next = new Node(4);
head.next.next.next = head.next;
console.log(`LinkedList has cycle: ${hasCycle(head)}`);
3, 2, 0, 4;
