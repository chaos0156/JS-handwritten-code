//如果传入的可迭代对象为空则返回一个用于处于pending状态的promise
//返回一个promise，promise的值是第一个改变状态的promise的值
function Pr(promiseArr) {
    if(promiseArr.length === 0) return new Promise(()=>{})
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((item)=>{
            Promise.resolve(item).then(val=>{
                resolve(val)
            })
        },reason=>{ reject(reason)})
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
  
  Pr([p1, p2, p3, p4,123,456,p5]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });