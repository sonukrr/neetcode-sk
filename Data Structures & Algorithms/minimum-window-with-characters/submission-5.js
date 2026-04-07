class Solution {
    minWindow(s, t) {
        if(t == "") return "";

        const countT = {}, window = {};
        
        for(const c of t){
            countT[c] = (countT[c] || 0) + 1;
        }

        let need = Object.keys(countT).length;

        var res = [-1, -1];
        var resLen = +Infinity;

        var l = 0;
        let have = 0;
        
        for(let r = 0; r < s.length; r++){
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(countT[c] && window[c] == countT[c]){
                have++;
            }

            while(have == need){
                if(r - l + 1 < resLen){
                    res = [l, r];
                    resLen = r - l + 1;
                }

                window[s[l]]--;

                if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                    have--;
                }
                l++;
            }        
        }

        return resLen == Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
