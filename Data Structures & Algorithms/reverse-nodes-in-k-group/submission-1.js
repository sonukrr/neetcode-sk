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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
      const dummy = new ListNode(0, head);
      var groupPrev = dummy;

      while(true){
        let kth = getKth(groupPrev, k);

        if(!kth)
          break;

        let groupNext = kth.next;

        let prev = kth.next; // the first node will point to the next group first node after reversal of this group
        let curr = groupPrev.next;

        while(curr != groupNext){
          let next = curr.next;
          curr.next = prev;

          prev = curr;
          curr = next;
        }

        // post reverse. connect the groupPrev to first
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;


      }

      return dummy.next;


      function getKth(curr, k){
        while(curr && k > 0){
          curr = curr.next;
          k--;
        }

        return curr;
      }
    }
}
