function Fn(name, age) {
    this.name = name
    this.age = age
}

function myNew() {
    //获取构造函数, 实参对象argumnets是一个类数组对象，有length属性，但不可以调用数组的方法
    let constructor = Array.prototype.shift.call(arguments)
    //判断构造函数
    if (typeof constructor !== 'function') return new Error('不是构造函数')
    //创建新对象，使其__proto__执行构造函数的原型对象
    let newObj = new Object()
    newObj.__proto__ = constructor.prototype
    //执行构造函数代码，使构造函数的this执行新创建的对象，为新创建的对象添加属性和方法
    //使用一个新变量获取构造函数的返回值
    let res = constructor.apply(newObj, arguments)
    //判断返回值是否存在。逻辑操作符会返回表达式的值，而不是布尔值
    let flag = res && (typeof res === 'object' || typeof res === 'function')
    return flag ? res : newObj
}
let a = myNew(Fn, 'chaos', 12)
console.log(a);