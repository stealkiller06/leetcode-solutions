class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  let dummy = head;
  let count = 1;

  if (head.next === null) return null;
  if (slow === dummy) {
    head = head.next;
    return head;
  }

  while (count < n) {
    fast = fast.next;
    count++;
  }
  //   console.log(fast);

  while (fast != null && fast.next !== null) {
    dummy = slow;
    slow = slow.next;
    fast = fast.next;
  }
  dummy.next = dummy.next.next;
  //   console.log(dummy);
};

let head = new Node(1);
head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

let n = 2;

removeNthFromEnd(head, n);
