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
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let node = dummy;
        let carry = 0;
        while(l1 || l2){
            let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            node.next = new ListNode(digit);

            l1 && (l1 = l1.next);
            l2 && (l2 = l2.next);

            node = node.next;

        }

        if(carry > 0){
            node.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
