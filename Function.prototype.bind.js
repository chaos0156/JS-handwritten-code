//返回函数模拟
Function.prototype.bind2 = function (context) {
    let fn = this
    return function () {
        return fn.apply(context)
    }
}


let obj = {
    name: 'chaos'
}
function getName() {
    console.log(this.name)
}

let fn = getName.bind2(obj)
fn()

//传参模拟
Function.prototype.bind3 = function (context) {
    let fn = this
    let args = [...arguments].slice(1)
    return function () {
        args = args.concat([...arguments])
        return fn.apply(context, args)
    }
}

let obj1 = {
    gender: 'male'
}
function getInfo(name, age) {
    console.log(this.gender);
    console.log(age);
    console.log(name);
}
let gg = getInfo.bind3(obj1)
gg(23, 'chaos')

//构造函数模拟
Function.prototype.bind4 = function (context) {
    let self = this
    let args = [...arguments].slice(1)
    let fNOP = function () { }
    let fBound = function () {
        args = args.concat(...arguments)
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fNOP ? this : context, args)
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    //我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：
    //fBound.prototype=this.prototype
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()

    return fBound
}



var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind4(foo, 'daisy');
var obja = new bindFoo(18);
// undefined
// daisy
// 18
console.log(obja.habit);
console.log(obja.friend);
// shopping
// kevin
