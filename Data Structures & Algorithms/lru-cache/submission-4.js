class Node {
  constructor(key, value) {
    this.key = key;
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LRUCache {
  head = null;
  tail = null;

  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // insert right after head (MRU)
  insert(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this.remove(node);
    this.insert(node);

    return node.value;
  }

  put(key, value) {

    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.remove(node);
      this.map.delete(key);
    }

    if (this.map.size >= this.capacity) {
      // Remove LRU (node before tail)
      const lru = this.tail.prev;
      this.remove(lru);
      this.map.delete(lru.key);
    }

    const node = new Node(key, value);
    this.insert(node);
    this.map.set(key, node);
  }
}