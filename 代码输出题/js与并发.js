// 并发完成
async function myAsync() {
    console.time()
    let res1 = asyncFun()
    let res2 = asyncFun()
    let res3 = asyncFun()
    await res1
    await res2
    await res3
    console.timeEnd()   // 1000ms
}

// 同步顺序执行
// async function myAsync() {
//     console.time()
//     let res1 = await asyncFun()
//     let res2 = await asyncFun()
//     let res3 = await asyncFun()
//     console.timeEnd()    //3000ms
// }

function asyncFun() {
    return new Promise(resolve => {
        setTimeout(resolve, 1000)
    })
}

myAsync()
