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
     * @return {void}
     */
    reorderList(head) {
        // find the mid 
        let slow = head;
        let fast = head;
        while(fast && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let mid = slow;

        // reverse the right half portion
        
        let curr = mid.next;
        mid.next = null;

        let prev = null;
        while(curr){
            let temp = curr.next
            curr.next = prev;

            prev = curr;
            curr = temp;
        }

        let second = prev;

        // merge the first and second
        let first = head;
        
        while(first && second){
            let firstTemp = first.next;
            let secondTemp = second.next;

            first.next = second;
            second.next = firstTemp;

            first = firstTemp;
            second = secondTemp;


        }

    }
}
