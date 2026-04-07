/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root == null) return null;
        const queue = [root];
        while (queue.length > 0) {
            let node = queue.shift();
            [node.left, node.right] = [node.right, node.left];
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        return root;
    }
}
