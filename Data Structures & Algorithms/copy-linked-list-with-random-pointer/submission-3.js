class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;

        let curr = head;

        // Insert copied nodes after originals
        while (curr) {
            const copy = new Node(curr.val);
            copy.next = curr.next;
            curr.next = copy;
            curr = copy.next;
        }

        // Assign random pointers to copied nodes
        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next; // new node next reference
            }
            curr = curr.next.next;
        }

        // Separate original and copied lists
        curr = head;
        const dummy = new Node(0);
        let copyCurr = dummy;

        while (curr) {
            copyCurr.next = curr.next;
            curr.next = curr.next.next;

            curr = curr.next;
            copyCurr = copyCurr.next;
        }

        return dummy.next;
    }
}
