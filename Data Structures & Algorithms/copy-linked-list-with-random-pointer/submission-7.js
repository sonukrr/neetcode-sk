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
        
        let map = new Map(); // old to new map
        let curr = head;
        while(curr){
            let newNode = map.get(curr);
            if(!newNode){
                newNode = new Node(curr.val);
                map.set(curr, newNode);
            }


            // pointers
            if(curr.next){
                let next = map.get(curr.next);
                if(next == undefined){
                    next = new Node(curr.next.val);
                    map.set(curr.next, next);
                }
                newNode.next = next;
            }
           
             if(curr.random){
                let random = map.get(curr.random);
                if(random == undefined){
                    random = new Node(curr.random.val);
                    map.set(curr.random, random);
                }
                newNode.random = random;
            }
                        
            curr = curr.next;
        }

        return map.get(head); 

    }
}


// 1 - 2 - 3 
// 1