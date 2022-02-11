function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l2;

  let dumieNode = new ListNode(-1);
  let result = dumieNode;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      console.log("entro al primero");
      dumieNode.next = new ListNode(l2.val);
      dumieNode = dumieNode.next;
      l2 = l2.next;
    } else if (l2.val > l1.val) {
      dumieNode.next = new ListNode(l1.val);
      dumieNode = dumieNode.next;
      l1 = l1.next;
      console.log("entro al segundo");
    } else {
      dumieNode.next = new ListNode(l2.val);
      dumieNode = dumieNode.next;
      l2 = l2.next;

      dumieNode.next = new ListNode(l1.val);
      dumieNode = dumieNode.next;
      l1 = l1.next;
    }
  }

  if (l1) dumieNode.next = l1;
  if (l2) dumieNode.next = l2;
  return result.next;
};

let list1 = new ListNode(2, null);

let list2 = new ListNode(1, null);

console.log(mergeTwoLists(list1, list2));
