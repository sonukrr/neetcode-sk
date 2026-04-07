// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return head;
        
        let map = new Map();

        // original node -> copy node
        let curr = head;
        while(curr){
            map.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // set next and random pointers for copy nodes
        curr = head;
        while(curr){
            let node = map.get(curr);
            node.next = curr.next ? map.get(curr.next) : null;
            node.random = curr.random ? map.get(curr.random) : null;

            curr = curr.next;
        }

        return map.get(head);
    }
}
