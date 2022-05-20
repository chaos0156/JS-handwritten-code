function split(n) {
    let num = n.toString()
    let decimals = ''
    // 判断包含小数
    if (num.includes('.')) {
        decimals = num.split('.')[1]
        num = num.split('.')[0]
    }
    let len = num.length
    let rest = len % 3
    if (rest !== 0) {
        // 不是3的整数倍
        num = num.slice(0, rest) + ',' + num.slice(rest).match(/\d{3}/g).join(',')
    } else {
        // 3的整数倍
        num = num.slice(rest).match(/\d{3}/g).join(',')
    }
    if (decimals.length > 0) {
        num = num + '.' + decimals
    }
    return num
}
let num = 1123456789
console.log(split(num)) //1,123,456,789
let n = 11445213.3321
console.log(split(n));      //11,445,213.3321
