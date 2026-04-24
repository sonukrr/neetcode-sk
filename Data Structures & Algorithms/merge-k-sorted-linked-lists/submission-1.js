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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length == 0) return null;

        // we merge the curr and curr - 1 list
        // update the result list with curr
        // the last index in array will give the final mergeed list
        for(let i = 0; i < lists.length; i++){
            lists[i] = this.mergeTwoSortedList(lists[i], lists[i - 1]);
        }

        return lists[lists.length - 1];
    }

    mergeTwoSortedList(l1, l2){
        let dummy = new ListNode();
        let tail = dummy; // tail of our result list

        while(l1 && l2){

            // pick smaller node and link it
            if(l1.val < l2.val){
                tail.next = l1;
                l1 = l1.next;
            }else{
                tail.next = l2;
                l2 = l2.next;
            }

            tail = tail.next;
        }

        if(l1){
            tail.next = l1;
        }

        if(l2){
            tail.next = l2;
        }

        return dummy.next;
    }
}
