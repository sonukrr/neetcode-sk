class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.left = new Node(0,0);
        this.right = new Node(0,0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node){
        const prev = node.prev;
        prev.next = node.next;

        const next = node.next;
        next.prev = prev;
    }

    insert(node){
        const tail = this.right.prev;
        tail.next = node;
        node.prev = tail;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            const node = this.map.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }else{
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.remove(this.map.get(key));
            this.map.delete(key);
            
        }

        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.insert(newNode);

        if(this.map.size > this.capacity){
            const lru = this.left.next;
            this.remove(lru);
            this.map.delete(lru.key);
        }


    }
}
