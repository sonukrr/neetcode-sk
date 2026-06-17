class Solution{
  
  
  mergeKLists(lists){
    if (lists.length == 0) return null;

    const minQueue = new MinPriorityQueue(node => node.val);

    for(const list of lists){
      minQueue.enqueue(list);
    }


    var dummy = new ListNode();
    var curr = dummy;


    while(minQueue.size() > 0){
      let smallest = minQueue.dequeue();

      curr.next = new ListNode(smallest.val);      

      if(smallest.next){
        minQueue.enqueue(smallest.next);
      }
      

      curr = curr.next;
      
    }

    return dummy.next;
  }
}

// create a min priority queue
// add the first node val from each list to Q
// pop until Q is empty - smallest value
// for each pop - push the next node val

// lists=[[1,2,4],[1,3,5],[3,6]]

// [1,3,2,6,4,1,3,5]

// 2 1 3