class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s) {
      const arr = s;

      // reverse the string
      let l = 0;
      let r = arr.length - 1;

      while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;        
      }

      // get the word and reverse each word
      for(let start = 0; start < arr.length; start++){
        if(arr[start] !== ' '){
          let end = start;
          while(end < arr.length && arr[end] !== ' ') end++;

          reverse(start, end - 1);
          start = end;
        }
      }


      function reverse(l, r){
        while(l < r){
          [arr[l], arr[r]] = [arr[r], arr[l]];
          l++;
          r--;
        }
      }
      
    }
}


//  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// [e,u,l,b, , s,i, , y,k,s, , e,h,t]
// [blue is sky the]