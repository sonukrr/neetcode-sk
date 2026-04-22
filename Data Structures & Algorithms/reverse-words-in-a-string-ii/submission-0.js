class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseWords(s) {
      const arr = s;

      // reverse the current arr
      let l = 0;
      let r = arr.length - 1;

      while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;        
      }

      // capture word from right and reverse it in place
      for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] !== ' '){
          // capture word until space is reached
          let j = i;
          while(j >= 0 && arr[j] != ' '){
            j--;
          }

          reverse(j + 1, i);
          i = j;
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