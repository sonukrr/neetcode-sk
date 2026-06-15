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
        // new list
        let dummy = new Node(0);
        let newCurr = dummy;

        // original list map
        let map = new Map();        
        let curr = head;
        while(curr){
            let newNode = new Node(curr.val);
            newCurr.next = newNode;
            map.set(curr, newNode);
            curr = curr.next;
            newCurr = newCurr.next;
        }

        
        curr = head;
        while(curr){
            let newNode = map.get(curr);
            let nxt = curr.next != null ? map.get(curr.next) : null;
            let rand = curr.random != null ? map.get(curr.random) : null;
            newNode.next = nxt;
            newNode.random = rand;
            curr = curr.next;
        }

      return dummy.next;

    }
}
