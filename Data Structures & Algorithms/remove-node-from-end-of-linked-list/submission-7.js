/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    const dummy = new ListNode(null, head);
    let fast = dummy;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }

    let slow = dummy;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
  }
}
