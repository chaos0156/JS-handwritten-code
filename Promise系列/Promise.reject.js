// Promise.reject会实例化一个rejected状态的promise，且值就是传入的value
function Pr(value) {
    return new Promise((_,reject)=>{reject(value)})
}