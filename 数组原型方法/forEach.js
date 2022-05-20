Array.prototype.myForEach = function (callback, thisArg) {
    if(typeof callback !== 'function') return new TypeError
    const arr = this
    const n = arr.length
    if(!n) return new TypeError
    for(let i=0;i<n;i++){
        callback.call(thisArg,arr[i],i,arr)
    }
}