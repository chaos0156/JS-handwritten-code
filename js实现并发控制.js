
/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
function asyncPool11(array, poolLimit, iteratorFn) {
    let i = 0;
    const ret = []; // 存储所有的异步任务
    const executing = []; // 存储正在执行的异步任务
    const enqueue = function () {
        if (i === array.length) {
            return Promise.resolve();
        }
        const item = array[i++]; // 获取新的任务项
        const p = Promise.resolve().then(() => iteratorFn(item));
        ret.push(p);
        // 当任务完成后，从正在执行的任务数组中移除已完成的任务
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        let r = Promise.resolve();
        if (executing.length >= poolLimit) {
            r = Promise.race(executing);
        }
        // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
        return r.then(() => enqueue());
    };
    return enqueue().then(() => Promise.all(ret));
}
async function asyncPool(array, poolLimit, iteratorFn) {
    const ret = []; // 存储所有异步任务
    const executing = [];    // 存储正在执行的异步任务
    for (const item of array) {
        // 封装异步任务
        const p = Promise.resolve().then(() => iteratorFn(item))
        ret.push(p)
        const e = p.then(() =>
            executing.splice(executing.indexOf(e), 1)
        )
        executing.push(e)   // 保存正在执行的异步任务
        if (executing.length >= poolLimit) {
            await Promise.race(executing);  // 等待较快的任务执行完成
        }
    }
    return Promise.all(ret);
}

var dataLists = [1, 1, 1, 1, 1, 1, 1, 1];
var count = 0;
console.time()
asyncPool11(dataLists, 2, (curItem) => {
    return new Promise((resolve, reject) => {
        count++
        if (curItem == 2) {
            reject({ error: curItem })
        } else {
            setTimeout(() => {
                console.log(curItem, '当前并发量:', count--)
                resolve({ success: curItem });
            }, curItem * 1000)
        }
    });
}).then(response => {
    console.log('finish', response)
    console.timeEnd()
}).catch(reason => {
    console.log('失败', reason);
})
