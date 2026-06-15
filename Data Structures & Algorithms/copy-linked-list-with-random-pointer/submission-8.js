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
    if (!head) return null;

    //step 1 - create adjacent node for each
    let curr = head;
    while (curr) {
      let node = new Node(curr.val);
      let next = curr.next;
      curr.next = node;
      node.next = next;
      curr = next;
    }

    // step 2 - update random pointers
    let first = head;
    let second = head.next;

    while (first && first.next) {
      second.random = first.random != null ? first.random.next : null;

      first = first.next.next;
      second = second.next != null ? second.next.next : null;
    }

    let dummy = new Node(0, head);
    let prev = dummy;

    // step 3 - remove old nodes
    // Step 3: Separate the two lists
    let old = head;
    let newHead = head.next;

    while (old) {
      const copy = old.next;

      old.next = copy.next;
      copy.next = copy.next ? copy.next.next : null;

      old = old.next;
    }

    return newHead;
  }
}

// space optimized
// 1 - 2 - 3 - 4

// 1 - 1' - 2 - 2' - 3 - 3' - 4 - 4'

// step 1 - create adjacent new nodes in list
// step 2 - update random pointer for new node. newNode.random = oldNode.random.next.
// use 2 pointers. old and new
