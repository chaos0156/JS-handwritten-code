function multiply(a, b) {
    if (a == '0' || b == '0') return '0'
    let m = a.length
    let n = b.length
    let res = ''
    for (let i = n - 1; i >= 0; i--) {
        let sum = ''
        let zero = n - i - 1
        while (zero > 0) {
            sum = sum + '0'
            zero--
        }
        let tmp = 0
        let jinwei = 0
        for (let j = m - 1; j >= 0; j--) {
            tmp = parseInt(a[j]) * parseInt(b[i]) + jinwei
            jinwei = Math.floor(tmp / 10)
            sum = (tmp % 10) + sum
        }
        if (jinwei > 0) {
            sum = `${jinwei}` + sum
        }
        res = addStrings(res,sum)
    }
    return res
}
function addStrings(a, b) {
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length);
    //用0去补齐长度
    a = a.padStart(maxLength, '0');//"0009007199254740991"
    b = b.padStart(maxLength, '0');//"1234567899999999999"
    //定义加法过程中需要用到的变量
    let t = 0;
    let f = 0;   //"进位"
    let sum = "";
    for (let i = maxLength - 1; i >= 0; i--) {
        t = parseInt(a[i]) + parseInt(b[i]) + f;
        f = Math.floor(t / 10);
        sum = t % 10 + sum;
    }
    if (f == 1) {
        sum = "1" + sum;
    }
    return sum;
}
let a = '78234'
let b = '123'
console.log(multiply(a, b))




function multiplyMM(a,b){
    let m = a.length
    let n = b.length
    let res = new Array(m+n).fill(0)
    for(let i =m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            let t = parseInt(a[i]) * parseInt(b[j])
            let p1 = i+j
            let p2 = i+j+1
            let sum = t + res[p2]
            res[p2] = sum % 10
            res[p1] += Math.floor(sum /10)
        }
    }
    while(res[0]==0) res.shift()
    return res.length == 0? '0':res.join('')
}