var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let left = 0
    let right = 0
    let res = 0
    while (right < s.length) {
        let char = s[right]
        right++
        map.set(char, map.has(char) ? map.get(char) + 1 : 1)
        while(map.get(char) > 1) {
            let c = s[left]
            left++
            map.set(c,map.get(c) - 1)
        }
        res = Math.max(res,right - left)
    }
    return res
};

let str = lengthOfLongestSubstring('abcdeeedswgf')
console.log(str);   //6