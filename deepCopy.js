function deepClone(obj) {
    if (typeof obj !== 'object') return new Error('非对象')
    if (Object.prototype.toString.call(obj).slice(8, -1) === 'Date') return new Date(obj)
    if (Object.prototype.toString.call(obj).slice(8, -1) === 'RegExp') return new RegExp(obj)
    let newObj = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if(obj[key] === null ){
                newObj[key] = obj[key]
            }else{
                newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
            }
        }
    }
    return newObj
}

let _ = require('lodash')
let obj = {
    a: 0,
    b: {
        c: {
            z: new Date(),
            w: /^d$/
        },
        d: undefined,
        e: Symbol(1),
        f() { },
        g: true,
        h: 'chaos',
        k: [1, 2, 3, 4, 5],
        y: null
    },
    k: NaN
}
let obj2 = deepClone(obj)
let obj3 = _.cloneDeep(obj)
let str = JSON.stringify(obj)    // {"a":0,"b":{"c":{"z":"2022-03-10T06:50:34.028Z","w":{}},"g":true,"h":"chaos","k":[1,2,3,4,5],"y":null},"k":null}
console.log(str);
let obj4 = JSON.parse(str)  
console.log('obj2',obj2);
console.log(Object.prototype.toString.call(obj2.b.c.z)) // [object Date]
console.log(Object.prototype.toString.call(obj2.b.c.w)) // [object RegExp]
console.log('obj3',obj3);
// {
//     a: 0,
//     b: {
//       c: { z: 2022-03-10T06:47:20.963Z, w: /^d$/ },
//       d: undefined,
//       e: Symbol(1),
//       f: [Function: f],
//       g: true,
//       h: 'chaos',
//       k: [ 1, 2, 3, 4, 5 ],
//       y: null
//     },
//     k: NaN
//   }
console.log('obj4',obj4);
// {
//     a: 0,
//     b: {
//       c: { z: '2022-03-10T06:47:20.963Z', w: {} },
//       g: true,
//       h: 'chaos',
//       k: [ 1, 2, 3, 4, 5 ],
//       y: null
//     },
//     k: null
//   }