Object.Myassign = function (target, ...source) {
    let type = Object.prototype.toString.call(target).slice(8,-1)
    if(type === 'Null' || type === 'Undefined') throw new TypeError('Cannot convert undefined or null to object')
    let res = Object(target)
    source.forEach(obj => {
        Object.keys(obj).forEach(key=>{
            res[key] = obj[key]
        })
    })
    return res
}
let target = { a: 1 };
let object2 = {
    b: {
        d: 2
    }
};
let object3 = { c: 3 };
Object.Myassign(target, object2, object3);
console.log(target);  // { a: 1, b: { d: 2 }, c: 3 }
object2.b.d = 4
console.log(target) // { a: 1, b: { d: 4 }, c: 3 }