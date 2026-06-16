// Doubly linked list
class ListNode{
  constructor(key, val, prev = null, next = null){
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache{

  
  constructor(capacity){
    this.capacity = capacity;
    this.map = new Map(); // map of key and Node references
    
    // first head nad tail node act as dummy nodes so we can easily add/remove actual head and tail by applying the uniform logic
    this.head = new ListNode(0,0); 
    this.tail = new ListNode(0, 0);

    // connect head and tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // insert in beggining
  insert(node){
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }


  // remove nth node
  remove(node){
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;

  }

  get(key){
    if (!this.map.has(key)) return -1;
    
    let node = this.map.get(key);

    // mark as MRU.
    // remove the node, then add to left
    this.remove(node);
    this.insert(node);

    return node.val;
  }


  put(key, val){

    if(this.map.has(key)){
      let node = this.map.get(key);
      this.remove(node);
      this.map.delete(key);
    }

    if(this.map.size >= this.capacity){
      this.map.delete(this.tail.prev.key);
      this.remove(this.tail.prev);      
    }

    let node = new ListNode(key, val);
    this.map.set(key, node);
    this.insert(node);

  }

}