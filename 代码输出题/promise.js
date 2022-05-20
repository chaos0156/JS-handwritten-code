const promise1 = () => Promise.resolve(1);
const promise2 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
const promise3 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
const promiseList = [promise1, promise2, promise3];
function promiseChain(promiseList) {
    //写出代码，输出为以下值
    const res = []
    promiseList.forEach(i=>{
        const p = i().then(a=>console.log(a))
        res.push(p)
    })
    return Promise.all(res)
}
promiseChain(promiseList).then(() => {
    console.log("所有 Promise 执行完毕。")
});
//1
//2
//3
//所有promise执行完毕
