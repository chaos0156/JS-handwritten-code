function fn(nums) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(nums * 2)
        },1000)
    })
}
//调用生成器函数返回一个生成器对象，生成器对象实现了Iterator接口，可以调用next()方法
function* gen() {
    const num1 = yield fn(1)
    console.log(num1);
    const num2 = yield fn(num1)
    console.log(num2);
    const num3 = yield fn(num2)
    console.log(num3);
    return num3
}
function generatorToAsync(genFn) {
    return function() {
        return new Promise((resolve)=>{
            const g = genFn()
            //第一次调用next传入的参数不会被使用，相当于开始执行生成器函数
            go()
            function go(arg){
                const {value,done} = g.next(arg)
                if(done) resolve(value)
                else{
                    value.then((res)=>{
                        go(res)
                    })
                }
            }
        })
    }
}

const asyncFn = generatorToAsync(gen)

asyncFn().then(res=>console.log(res))   //3秒后输出8