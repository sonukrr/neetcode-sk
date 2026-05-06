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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    // TC - O(max(n,m)), SC - O(max(n,m))
    addTwoNumbers(l1, l2) {
        let carry = 0;

        let head = new ListNode(null);

        let h1 = l1;
        let h2 = l2;
        let curr = head;

        while(h1 || h2 || carry){
            let n1 = h1?.val || 0;
            let n2 = h2?.val || 0;

            let sum = n1 + n2 + carry;

            let digit = Math.floor(sum % 10);
            carry = Math.floor(sum / 10);

            curr.next = new ListNode(digit);
            curr = curr.next;
            h1 = h1?.next || null;
            h2 = h2?.next || null;
            
        }

        return head.next;

    }
}
