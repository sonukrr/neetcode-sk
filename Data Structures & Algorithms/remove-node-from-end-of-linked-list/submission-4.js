class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    // nth node from end

    // get total len
    // go upto len - nth node

    let len = 0;
    let curr = head;
    while(curr){
        len++;
        curr = curr.next;        
    }

    const k = len - n;

    if(k == 0)
        return head.next;

    curr = head;

    for(let i = 0; i < len; i++){
        if(i + 1 == k){
            curr.next = curr.next.next;
            break;
        }

        curr = curr.next;
    }

    return head;
  }
}