class Solution{

  mergeKLists(lists){  
    if(lists.length == 0) return null;  
    
    let list1 = lists[0];
    
    for(let i = 1; i < lists.length; i++){
      list1 = mergeList(list1, lists[i]);
    }

    return list1;


    function mergeList(list1, list2){
      let dummy = new ListNode(0, null);
      let curr = dummy;

      let l1 = list1;
      let l2 = list2;

      while(l1 && l2){
        if(l1.val <= l2.val){
          curr.next = l1;
          l1 = l1.next;
        }else{
          curr.next = l2;
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

// merge two list and then 