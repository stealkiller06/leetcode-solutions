class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var getCycleLength = function (slow) {
  let current = slow;
  let count = 0;
  while (true) {
    current = current.next;
    count++;

    if (current === slow) return count;
  }
};
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return slow;
  }

  return null;
};
var detectCycle = function (head) {
  const slowPosition = hasCycle(head);
  if (!slowPosition) return null;
  let cycleLength = getCycleLength(slowPosition);

  let slow = head;
  let fast = head;

  while (cycleLength > 0) {
    fast = fast.next;
    cycleLength--;
  }

  while (true) {
    if (fast === slow) return slow;

    fast = fast.next;
    slow = slow.next;
  }
};

let node = new Node(3);
node.next = new Node(2);
// node.next.next = node;
node.next.next = new Node(0);
node.next.next.next = new Node(4);
node.next.next.next.next = node.next;

console.log(detectCycle(node));
