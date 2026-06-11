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
         
  let slow = head;
  let fast = head.next;

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }

  let first = head;
  // reverse second
  let s = slow.next;
  slow.next = null;
  let second = reverse(s);

  console.log(first);
  console.log(second)


  // merge  
  while(first && second){

    let next = first.next;
    first.next = second;
    let nexts = second.next;
    second.next = next;        

    first = next;
    second = nexts;
  }

  return head;



  function reverse(node){
    let curr = node;
    let prev = null;

    while(curr){
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
    }
}
