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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        return dfs(root, 0);

        function dfs(node, sum){
            if(!node) return false;

            sum += node.val;

            if(!node.left && !node.right){
                return sum == targetSum;
            }

            return dfs(node.left, sum) || dfs(node.right, sum);

        }
    }
}
