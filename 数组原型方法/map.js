Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== 'function') return new TypeError
    const arr = this
    const n = arr.length
    if (!n) return new TypeError
    let res = []
    for (let i = 0; i < n; i++) {
        if(arr[i] === undefined) continue
        res.push(callback.call(thisArg, arr[i], i, arr))
    }
    return res
}