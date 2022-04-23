// 接收一个可迭代对象
// 返回一个promise，值是可迭代对象中所有promise都成功后的值组成的数组。
// 返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。
// 如果有一个promise是rejected的，则返回第一个rejected的promise的值
// 如果可迭代对象是空，则同步输出一个已完成的Promise，值是空数组
// 如果可迭代对象中包含非promise的值，则会直接添加到返回结果的数组中
// 其余情况是异步完成的。
function Pa(promiseArr) {
    if( promiseArr.length === 0 ) return Promise.resolve(promiseArr)
    let index = 0
    let res = []
    return new Promise((resolve,reject) => {
        promiseArr.forEach((item,i)=>{
            Promise.resolve(item).then(val=>{ 
                index++
                res[i] = val
                if( index === promiseArr.length ){
                    resolve(res)
                }
            },
            reason=>{
                reject(reason)
            })
        })
    })
}
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'one');
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
  });
  var p5 = new Promise((resolve, reject) => {
    reject('reject');
  });
  
  Pa([p1, p2, p3, p4]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });
