function test(arg) {
    console.log(arg);
    var arg = 'hello';
    function arg() { console.log('hello world'); }
    console.log(arg);
}
test('hi');

// 对局部数据进行预处理
// 1.形参：先将实参赋值给形参，添加为函数执行上下文对象的属性
// 2.arguments：将实参列表赋值给arguments。
// 3.var定义的局部变量提升,赋值为undefined
// 4.function声明的函数进行函数提升，添加为上下文方法
// 5.this指向调用函数的对象


// var对变量的重复声明
// 当重复声明的变量有初始值，var语句只是简单的执行赋值操作
// 当重复声明的变量没有初始值，则对已经存在的变量不会造成影响