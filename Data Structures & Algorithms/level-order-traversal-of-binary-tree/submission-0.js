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
     * @return {number[][]}
     */
    levelOrder(root) {
      if(!root) return [];

        const arr = [];
        let i = 0;
        
        levelOrderGroup(root);

        return arr;

        function levelOrderGroup(node){
            
            const q = [node];
            while(q.length > 0){
                let a = [];
                while(q.length > 0){
                  const n = q.shift();
                  if(!arr[i]){
                    arr[i] = [];
                  }
                  arr[i].push(n.val);
                  n.left && a.push(n.left);
                  n.right && a.push(n.right);
                }
                i++;
                console.log(a.map(el => el.val))
                q.push(...a);
            }
            

        }
    }
}
