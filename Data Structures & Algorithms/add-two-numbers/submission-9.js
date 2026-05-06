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
        let len1 = 0;
        let len2 = 0;

        let curr = l1;
        while(curr){
            len1++;
            curr = curr.next;
        }

        curr = l2;
        while(curr){
            len2++;
            curr = curr.next;
        }
        let head = null;
        let first = null;
        let second = null;

        if(len1 > len2){
            head = l1;
            first = l1;
            second = l2;
        }else{
            head = l2;
            first = l2;
            second = l1;
        }

        let carry = 0;
        while(first && first.next){
            let n1 = first?.val || 0;
            let n2 = second?.val || 0;

            let sum = n1 + n2 + carry;
            let digit = Math.floor(sum % 10);
            carry = Math.floor(sum / 10);

            first.val = digit;
            first = first.next;
            second = second?.next || null;
            
        }

        let sum = first.val + (second?.val || 0) + carry;
        first.val = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);

        if(carry > 0){
            first.next = new ListNode(carry);
        }
            

        return head;


    }
}
