// let obj = {
//     a: 1,
//     b: 2,
//     [Symbol('a')]: 2,
// }
// obj.__proto__ = {
//     c: 1
// }
let obj = [1,2,3]
Object.defineProperty(obj, 'b', {
    enumerable: false
})
Object.keys(obj).forEach(key => {
    console.log('keys', key)
})
Object.getOwnPropertyNames(obj).forEach(key => {
    console.log('propname', key);
})
Object.getOwnPropertySymbols(obj).forEach(key => {
    console.log('Symbols', key);
})
for (let key in obj) {
    console.log('forin', key);
}
Reflect.ownKeys(obj).forEach(key => { // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
    console.log('ownkey', key);
})
let arr = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))
console.log(arr);