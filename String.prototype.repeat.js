let str = 'abc'
// 转换为数组
function repeat(str, n) {
    return (new Array(n + 1)).join(str)
}
// 递归
function repeat2(str, n) {
    return n > 0 ? str.concat(repeat2(str,n-1)) : ""
}

let res = repeat2(str, 2)
console.log(res);   //abcabc