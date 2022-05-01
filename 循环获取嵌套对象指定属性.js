function get(obj, path) {
    let paths = path.split('.')
    let res = obj
    paths.forEach(key => {
        res = res[key]
    })
    return res
}
function getA(obj, path) {
    // let paths = path.replace(/\[(\d+)\]/g, function (_, p1) { return `.${p1}` }).split('.')
    let paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
    let i = 0;
    let res = obj
    while (i < paths.length) {
        res = res[paths[i]]
        if (res === undefined) return
        i++
    }
    return res
}

let obj = {
    a: [{
        b: {
            c: 1
        }
    }]
}
let path = 'a[0].b.c'
let str = getA(obj, path)
console.log(str);

const _ = require('lodash')
let user = {
    name: 'xxx',
    address: [{
        city: 'nanjing'
    }]
}
let stra = 'address[0].city'
console.log(_.get(user, stra));
console.log(user?.address?.[0]?.city)
let val = user && user.address && user.address[0] && user.address[0].city
console.log(val)
