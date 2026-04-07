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
        while(curr1 && curr2){
            let sum = curr1.val + curr2.val + carry;
            
            let digit = sum % 10;

            dummy.next = new ListNode(digit);
            dummy = dummy.next;

            carry = Math.floor(sum / 10);
            curr1 = curr1.next;
            curr2 = curr2.next;

        }

        while(!curr1 && !curr2 && carry > 0){
            dummy.next = new ListNode(carry);
            carry = 0;
            dummy = dummy.next;
        
        }

        while(curr1){
            dummy.next = new ListNode((curr1.val + carry) % 10);
            dummy = dummy.next;
            carry = Math.floor((curr1.val + carry) / 10);
            curr1 = curr1.next;
        }

        while(curr2){
            dummy.next = new ListNode((curr2.val + carry) % 10);
            dummy = dummy.next;
            carry = Math.floor((curr2.val + carry) / 10);
            curr2 = curr2.next;
        }

        if(carry > 0){
            dummy.next = new ListNode(carry);
            carry = 0;
        }

        return head.next;
    }
}

