class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  let dummy = head;

  while (fast !== null && fast?.next !== null) {
    dummy = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  dummy.next = dummy.next.next;

  return head;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

deleteMiddle(head);
