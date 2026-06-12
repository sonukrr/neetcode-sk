class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    // 2 pointers
    // go upto n + 1 node
    // increment the slow and fast equally till fast.nxt = null
    // slow points to -1 node to be deleted

    let curr = head;
    let i = 0; // one prev from the node to be deleted
    while (curr) {
      
      if (i == n) {
        break;
      }

      curr = curr.next;
      i++;
    }

    let second = curr;
    let first = head;

    if (second == null) {
      return head.next;
    }

    while (second && second.next) {
      first = first.next;
      second = second.next;
    }

    first.next = first.next.next;

    return head;
  }
}

