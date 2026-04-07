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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 == null)
            return list2;
        if (list2 == null) {
            return list1;
        }

        if (list2.val < list1.val) {
            [list1, list2] = [list2, list1];
        }

        let curr1 = list1;
        let curr2 = list2;

        let mergedHead = curr1;

        let prev = null;
        while (curr1 && curr2) {

            if (curr1.val <= curr2.val) {
                prev = curr1;
                curr1 = curr1.next;
            } else {
                let next2 = curr2.next;
                prev.next = curr2;
                curr2.next = curr1;

                prev = curr2;
                curr2 = next2;
            }

        }

        if (curr2) {
            prev.next = curr2;
        }

        return mergedHead;
    }
}
