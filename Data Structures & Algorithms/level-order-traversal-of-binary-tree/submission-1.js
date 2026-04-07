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
    if (!root) return [];

    const queue = new Queue();
    queue.push(root);

    const res = [];
    while (!queue.isEmpty()) {
      let level = [];
      for (let i = queue.size(); i > 0; i--) {
        let node = queue.pop();
        level.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);

      }
      if (level.length > 0)
        res.push(level);
    }

    return res;

  }
}
