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
        longestDiameter(root);
        return res;

        function longestDiameter(node){
            if(node == null) return 0;
            

            let lh = longestDiameter(node.left);
            let rh = longestDiameter(node.right);

            res = Math.max(res, lh + rh);

            return 1 + Math.max(lh, rh);
        }

    }
}
