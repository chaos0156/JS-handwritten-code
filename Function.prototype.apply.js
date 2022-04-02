//bind接收两个参数

Function.prototype.myApply = function (context, args) {
    // 1. 判断调用myApply的是不是一个函数
    if (typeof this !== 'function') return new Error('不是函数')
    // 2. 判断传入的执行上下文是否存在，如果不存在则使用全局对象
    context = context || window
    // 3. 将调用的函数作为上下文的方法
    context.fn = this
    // 4. 执行该方法，接收结果
    let res = context.fn(...args)
    // 5. 删除该方法
    delete context.fn
    // 6. 返回结果
    return res
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.myApply(this, [name, price]);
    this.category = 'food';
}

function Toy(name, price) {
    Product.myApply(this, [name, price]);
    this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);