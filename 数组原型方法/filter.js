Array.prototype.myFilter = function(callback,thisArg) {
    if(typeof callback !== 'function') return new TypeError
    const arr = this
    const n = arr.length
    if(!n) return new TypeError
    let res = []
    for(let i = 0 ;i<n;i++){
        callback.call(thisArg,arr[i],i,arr) && res.push(arr[i])
    }
    return res
}