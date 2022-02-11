class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let addNumber = 0;
  let head = new ListNode(-1);
  let dummyNode = head;
  let testTotal = [];

  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + addNumber;
    if (addNumber > 0) {
      addNumber--;
    }
    if (sum > 9) {
      dummyNode.next = new ListNode(sum % 10);
      addNumber++;
      testTotal.push(sum % 10);
    } else {
      dummyNode.next = new ListNode(sum);
      testTotal.push(sum);
    }
    dummyNode = dummyNode.next;
    l1 = l1.next;
    l2 = l2.next;

    if (!addNumber) {
      break;
    }
  }

  if (addNumber) {
    let nodeNeedSum = l1 || l2;
    while (nodeNeedSum !== null) {
      const sum = nodeNeedSum.val + addNumber;
      addNumber--;
      if (sum > 9) {
        dummyNode.next = new ListNode(sum % 10);
        addNumber++;

        testTotal.push(sum % 10);
      } else {
        dummyNode.next = new ListNode(sum);
        testTotal.push(sum);
      }
      nodeNeedSum = nodeNeedSum.next;
      dummyNode = dummyNode.next;
    }
    if (addNumber) dummyNode.next = new ListNode(1);
  }

  return head.next;
};

let l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);

let l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

addTwoNumbers(l1, l2);
