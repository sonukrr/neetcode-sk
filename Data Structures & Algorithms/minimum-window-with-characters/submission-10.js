class Solution{

  minWindow(s, t){
    
    const countT = {};
    for(const c of t){
      countT[c] = (countT[c] || 0) + 1;
    }

    let resLen = Infinity;
    let res = [-1, -1];

    let window = {};
    let l = 0;
    let need = Object.keys(countT).length;
    let have = 0;
    for(let r = 0; r < s.length; r++){

      let c = s[r];
      // add
      window[c] = (window[c] || 0) + 1;

      if(countT[c] && window[c] == countT[c]){
        have++;
      }

      // valid window found
      while(have == need){
        // update answer 
        if(r - l + 1 < resLen){
          resLen = r - l + 1;          
          res = [l, r + 1];
        }

        window[s[l]]--;


        // update have count
        if(countT[s[l]] && window[s[l]] < countT[s[l]]){
          have--;
        }

        l++;
      }       
      
    }    

    return res[0] >= 0 ? s.slice(res[0], res[1]) : "";
  }
  
}