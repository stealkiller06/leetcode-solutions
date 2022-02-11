function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dumyNode = head;
  let prev = head;

  while (dumyNode) {
    dumyNode = dumyNode.next;
    if (prev.val !== dumyNode?.val) {
      prev.next = dumyNode;
      prev = prev.next;
    }
  }
};

let node = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, null))))
  )
);

console.log(deleteDuplicates(node));

while (node) {
  console.log(node.val);

  node = node.next;
}
