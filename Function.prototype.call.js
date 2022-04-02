//call方法传入的参数不固定

//使用扩展运算符收集参数
Function.prototype.myCall = function (context, ...args) {
    console.log(args);
    // 1.判断调用call的是不是一个函数
    if (typeof this !== 'function') return new Error('不是函数')
    // 2.判断传入的context是否存在，如果不存在则绑定this为window
    context = context || window
    // 3.将调用函数设为上下文对象的一个方法
    context.fn = this
    // 4.执行函数
    let res = context.fn(...args)
    // 5.移除上下文对象的方法
    delete context.fn
    // 6.返回调用结果
    return res
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this);
    this.category = 'food';
}

function Toy(name, price) {
    Product.myCall(this);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);