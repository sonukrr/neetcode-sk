class Solution {
  /**
   * @param {string} beginWord
   * @param {string} endWord
   * @param {string[]} wordList
   * @return {number}
   */
  ladderLength(beginWord, endWord, wordList) {
    // create a set of wordList
    const words = new Set(wordList);

    // if end word not part of wordsList -> exit
    if (!words.has(endWord) || beginWord == endWord) return 0;

    // use BFS to find the shortest path to reach end word
    let q = new Queue([beginWord]);
    let levelCount = 0;

    while (!q.isEmpty()) {
      levelCount++;
      const size = q.size();

      for (let i = 0; i < size; i++) {
        let node = q.pop();

        if (node == endWord) {
          return levelCount;
        }

        // get all the neighbors of node
        // for length of node str, replace each char with all the possible chars
        // check if its part of word set

        for (let j = 0; j < node.length; j++) {
          // j'th char
          for (let k = 97; k < 123; k++) {
            if (node[j] == String.fromCharCode(k)) continue; // skip same char

            let nei =
              node.slice(0, j) + String.fromCharCode(k) + node.slice(j + 1);

            if (words.has(nei)) {
              q.push(nei);
              words.delete(nei);
            }
          }
        }
      }
    }

    return 0;
  }
}
