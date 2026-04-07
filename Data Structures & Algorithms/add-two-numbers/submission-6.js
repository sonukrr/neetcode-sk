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
        
        let curr1 = l1;
        let curr2 = l2;

        let dummy = new ListNode(0);
        let head = dummy;
        let carry = 0;

        while(curr1 || curr2 || carry){
            let val1 = curr1?.val || 0;
            let val2 = curr2?.val || 0;

            let sum = val1 + val2 + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            dummy.next = new ListNode(digit);
            dummy = dummy.next;

            curr1 = curr1?.next || null;
            curr2 = curr2?.next || null;
        }

        return head.next;
    }
}

