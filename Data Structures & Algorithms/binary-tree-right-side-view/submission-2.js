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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        const res = [];
        var q = new Queue();
        q.push(root);

        while(!q.isEmpty()){
            let rightSide = null;
            let len = q.size();
            while(len > 0){
                const pop = q.pop();
                pop.left && q.push(pop.left);
                pop.right && q.push(pop.right);
                rightSide = pop;
                len--;
            }

            if(rightSide){
                res.push(rightSide.val);
            }
            
        }

        return res;
    }
}
