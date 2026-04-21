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
        let res = false;
        pathSum(root, 0);
        return res;

        function pathSum(node, sum) {
            if (!node) return 0;

            sum += node.val;

            if (!node.left && !node.right) {
                // leaf node
                if(sum == targetSum)
                    res = true;
                return sum;
    
            }


            pathSum(node.left, sum);
            pathSum(node.right, sum);

            sum -= node.val;

            return sum;
        }

    }
}
