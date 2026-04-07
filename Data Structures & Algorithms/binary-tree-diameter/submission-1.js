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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;
        dfs(root);
        return res;

        function dfs(node){
            if(node == null) return 0;
            
            let lh = dfs(node.left);
            let rh = dfs(node.right);

            res = Math.max(res, lh + rh);

            return 1 + Math.max(lh, rh);
        }

    }
}
