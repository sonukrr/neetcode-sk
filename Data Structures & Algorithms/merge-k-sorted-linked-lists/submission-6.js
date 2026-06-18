class Solution{
  
  // duvide and conquer - iteration
  // O(N log k) - k - number of list, N - number of nodes
  mergeKLists(lists){

    if(!lists || lists.length == 0){
      return null;
    }

    // log k intervals - levels of merges and total merges of N total nodes
    while(lists.length > 1){
      const mergedLists = [];

      for(let i = 0; i < lists.length; i +=2){
        let l1 = lists[i];
        let l2 = i + 1 < lists.length ? lists[i + 1] : null;

        mergedLists.push(mergeList(l1, l2));
      }

      lists = mergedLists;
    }

    return lists[0];


    function mergeList(l1, l2){
      const dummy = new ListNode(0, null);
      var curr = dummy;

      while(l1 && l2){
        if(l1.val <= l2.val){
          curr.next = new ListNode(l1.val);
          l1 = l1.next;
        }else{
          curr.next = new ListNode(l2.val);
          l2 = l2.next;
        }

        curr = curr.next;
      }

      if(l1)
        curr.next = l1;

      if(l2)
        curr.next = l2;

      return dummy.next;

    }
  }
}
