Object.myFreeze = function (obj) {
    //参数判断
    if (Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() !== 'object') return new TypeError
    Object.keys(obj).forEach(key => {
        Object.defineProperty(obj, key, {
            // 不能删除属性，不能修改descripter
            configurable: false,
            // 不能修改值
            writable: false,
        })
    })
    //不能添加新属性
    return Object.seal(obj)
}

const obj = {
    prop: 42
};
Object.myFreeze(obj);
obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
obj.newp = 123
console.log(obj);
// Object.defineProperty(obj, 'prop', {
//     configurable: true,
//     writable: true
// })    //TypeError: Cannot redefine property: prop
obj.prop = 22
console.log(obj);