/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    map = new Map();
    cloneGraph(node) {
        if (!node) return null;
        if (this.map.has(node)) return this.map.get(node);

        let copy = new Node(node.val);
        this.map.set(node, copy);

        

        for (const n of node.neighbors) {
            copy.neighbors.push(this.cloneGraph(n));
        }


        return copy;
    }
}
