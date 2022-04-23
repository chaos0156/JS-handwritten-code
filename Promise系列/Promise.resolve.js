// 传入的value是非promise的值，则返回一个成功的promise，值就是value
// 传入的value是promise，则直接返回该promise
function Ps(value) {
    if(value instanceof Promise) return value;
    else return new Promise((resolve)=>resolve(value))
}