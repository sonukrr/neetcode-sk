class Solution {
  ladderLength(beginWord, endWord, wordList) {
    
    if(!wordList.includes(endWord) || beginWord == endWord)
      return 0;
    
    // store all patterns
    const pattern = new Map();

    // create the patterns map
    for (let i = 0; i < wordList.length; i++) {
      let word = wordList[i];
      let L = word.length;

      for (let j = 0; j < L; j++) {
        let str = word.slice(0, j) + "*" + word.slice(j + 1);
        if (!pattern.has(str)) {
          pattern.set(str, [word]);
        } else {
          pattern.get(str).push(word);
        }
      }
    }

    // BFS - shortest path
    let q = new Queue([beginWord]);
    let set = new Set([beginWord]);
    let count = 0;

    while (!q.isEmpty()) {
      count++;
      let size = q.size();

      for (let i = 0; i < size; i++) {
        const node = q.pop();

        if(node == endWord)
          return count;

        // get all neighbors
        let L = node.length;
        
        for (let i = 0; i < L; i++) {
          let str = node.slice(0, i) + "*" + node.slice(i + 1);
          const neighbors = pattern.get(str) || [];
                      
            for (const nei of neighbors) {
              if (!set.has(nei)) {
                q.push(nei);
                set.add(nei);
              }
            }

            pattern.set(str, []);
          
        }
      }
    }

    return 0;
  }
}
