// reduce接收两个参数 callback 和 initialValue
// 对数组中每个元素执行callback，并将其汇总为单个返回值。
// callback中传入四个参数(accumulator,currentValue[,index[,array]]),每次处理一个值callback中都有返回值，将返回值赋值给第一个参数
Array.prototype.myReduce = function (callback, initalVal) {
    // 参数判断
    if (typeof callback !== 'function') return new TypeError
    // 获取源数组
    const arr = this
    const n = arr.length
    if (!n) return new TypeError
    let acc, startIndex;
    if (initalVal === undefined) { acc = arr[0]; startIndex = 1 }
    else { acc = initalVal; startIndex = 0 }

    for (let i = startIndex; i < n; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}
// 找出最大值
const r = [2, 4, 8, 1].myReduce((a, b) => Math.max(a, b))
console.log(r) // 输出： 8

// 数组元素求和
const arr = [1, 2, 3, 4];
const initVal = 0;
const total = arr.myReduce((acc, cur) => {
    console.log(acc, cur);
    // 0 1
    // 1 2
    // 3 3
    // 6 4
    return acc + cur;
}, initVal);
console.log(total); // 输出：10