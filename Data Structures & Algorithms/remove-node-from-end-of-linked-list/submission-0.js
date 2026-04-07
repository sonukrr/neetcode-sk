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

        // get the total length
        let curr = head;
        let count = 0;

        while(curr){
            count++;
            curr = curr.next;
        }

        let idx = count - n;

        
        curr = head;
        let currIdx = 0;
        let prev = null;

        while(currIdx <= idx && curr){
            if(currIdx == idx){
                if(idx == 0) {
                    head = head.next;
                    break;
                }
                prev.next = curr.next;
                curr.next = null;
                break;
            }

            prev = curr;
            curr = curr.next;
            currIdx++;
        }

        return head;

    }
}
