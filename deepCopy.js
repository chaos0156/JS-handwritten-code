const _ = require('lodash')
function deepClone(target, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
    if (typeof target !== 'object') return target // 处理原始类型和函数 不需要深拷贝，直接返回
    if (target === null) return target // 如果是 null 就不进行拷贝操作
    const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error,Boolean,String,Number];
    if (reference.includes(target?.constructor)) {
        return new target.constructor(target);
    }
    // 是引用类型的话就要进行深拷贝
    if (hash.has(target)) return hash.get(target) // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
    const cloneTarget = new target.constructor() // 创建一个新的克隆对象或克隆数组
    hash.set(target, cloneTarget) // 如果存储空间中没有就存进 hash 里
    Reflect.ownKeys(target).forEach(key => { // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
        cloneTarget[key] = deepClone(target[key], hash) // 递归拷贝每一层
    })
    return cloneTarget // 返回克隆的对象
}
const map = new Map();
map.set("key", "value");
map.set("ConardLi", "coder");
const set = new Set();
set.add("ConardLi");
set.add("coder");
let obj1 = {}
let obj2 = {
    b: obj1
}
obj1.a = obj2
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: "child",
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        let t = 0;
        console.log("coder", t++);
    },
    func2: function (a, b) {
        return a + b;
    },
    obj1,
    obj2,
    [Symbol('a')]: 'why'
};
console.log(deepClone(target))
console.log(_.cloneDeep(target))
// console.log(JSON.parse(JSON.stringify(target)));    // 无法解决循环引用
