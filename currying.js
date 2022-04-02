//一、参数复用
function curry(fn, args) {
    args = args || []
    return function () {
        let newArgs = [].slice.call(args)
        newArgs = newArgs.concat([].slice.call(arguments))
        if (fn.length > newArgs.length) return curry.call(this, fn, newArgs)
        return fn.apply(this, newArgs)
    }
}

const uri_curring = curry(function (protocal, hostname, pathname) {
    return `${protocal}${hostname}${pathname}`
})
const uri_https = uri_curring('https://')
const uri_bilibili = uri_https('bilibili.com')
const uri_video = uri_bilibili('/video')
const uri_pictures = uri_bilibili('/pictures')
console.log(uri_video);   //https://bilibili.com/video 
console.log(uri_pictures); //https://bilibili.com/pictures



const nameList1 = [
    { mid: '压缩', profession: '中单' },
    { mid: '沙皇', profession: '中单' },
    { mid: '发条', profession: '中单' },
    { mid: '卡牌', profession: '中单' }
]
const nameList2 = [
    { adc: '老鼠', profession: 'ADC' },
    { adc: '大嘴', profession: 'ADC' },
    { adc: '卡莎', profession: 'ADC' }
]
const currying = name => element => element[name]
//接收两个参数name、element
const name_mid = currying('mid')    
const name_adc = currying('adc')    
//先传入第一个参数    
console.log(nameList1.map(name_mid));   //['压缩', '沙皇', '发条', '卡牌'
console.log(nameList2.map(name_adc));   //['老鼠', '大嘴', '卡莎']
//调用一次map传入第二个参数element

//二、提前确认
const whichEvent = (function () {
    if (window.addEventListener) {
        return function (element, type, listener, useCapture) {
            element.addEventListener(type, function (e) {
                listener.call(element, e)
            }, useCapture);
        }
    } else if (window.attachEvent) {
        return function (element, type, handler) {
            element.attachEvent('on' + type, function (e) {
                handler.call(element, e)
            })
        }
    }
})()


//三、延迟执行

//参数不确定所以不给add设置形参
function add() {
    let args = Array.prototype.slice.call(arguments)   //利用args保存实参
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let inner = function () {     //接收之后传入的参数
        args.push(...arguments)
        return inner    //不断递归
    }
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    inner.toString = function () {
        return args.reduce((a, b) => a + b)
    }
    return inner
}
//返回一个函数，但是以字符串形式输出，原本函数被转换为字符串显示，发生了隐式转换，因为调用了函数内部的toString方法
let a = add(1)(4)(5)(3)
console.log(a.toString());  //12
console.log(typeof a);  //function
console.log(a == 13) //true