function mySetInterval(fn, timeout) {
    let timer;
    // 设置递归函数，模拟定时器执行。
    function interval() {
        timer = setTimeout(interval, timeout);
        fn(timer);
    }
    // 启动定时器
    timer = setTimeout(interval, timeout);
    // 返回控制器
    return timer
}
let a = 1
console.time()
function fn(timer){
    a++
    console.log(a)
    if(a>=3) {
        clearTimeout(timer)
        console.timeEnd()
    }
}
mySetInterval(fn,1000)