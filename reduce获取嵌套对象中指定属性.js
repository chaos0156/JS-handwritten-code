function getR(obj, path) {
    return path.split('.').reduce((o, key) => o[key], obj)
}

let obj = {
    name:'zs',
    info:{
        address:{
            location:'南京'
        }
    }
}

const str = 'info.address.location'
let result = getR(obj,str)
console.log(result);

let obj1 = {
    a: {
        b: {
            c: 1
        }
    }
}

let p = 'a.b.c'
let st = getR(obj1, p)
console.log(st);