/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1) return list2;
  if (!list2) return list1;

  const list = new ListNode();
  let currHead = list;

  const insert = (val) => {
    currHead.next = new ListNode();
    currHead = currHead.next;
    currHead.val = val;
    currHead.next = null;
  };

  const swap = (ref) => {
    let val = ref.val;
    ref = ref.next;
    insert(val);
    return ref;
  };

  while (true) {
    let currL1 = list1 ? list1.val : null;
    let currL2 = list2 ? list2.val : null;

    if (currL1 === null && currL2 === null) break;

    if (currL1 !== null && currL2 === null) {
      list1 = swap(list1);
      continue;
    }
    if (currL2 !== null && currL1 === null) {
      list2 = swap(list2);
      continue;
    }
    if (currL1 < currL2) {
      list1 = swap(list1);
      continue;
    }
    list2 = swap(list2);
  }

  return list.next;
};
