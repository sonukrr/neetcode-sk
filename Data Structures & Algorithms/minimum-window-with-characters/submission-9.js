class Solution {
  minWindow(s, t) {
    const freqT = {};

    for (const c of t) {
      freqT[c] = (freqT[c] || 0) + 1;
    }

    let res = Infinity;
    let str = "";

    const map = {};
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      // add right character
      map[s[r]] = (map[s[r]] || 0) + 1;

      // shrink while window remains valid
      while (found(map, freqT)) {

        if (r - l + 1 < res) {
          res = r - l + 1;
          str = s.slice(l, r + 1);
        }

        // remove left char
        map[s[l]]--;
        l++;
      }
    }

    return str;

    function found(map, freq) {
      for (const c in freq) {
        if ((map[c] || 0) < freq[c]) {
          return false;
        }
      }
      return true;
    }
  }
}