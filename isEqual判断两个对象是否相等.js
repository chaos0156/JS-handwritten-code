function isEqual(obj1, obj2) {
    // 参数类型判断
    let isObj = type(obj1) === 'object' && type(obj2) === 'object'
    if (!isObj) return false
    // 判断对象长度是否相同
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (type(obj1[key]) === 'object' || type(obj2[key]) === 'object') {
                if (!isEqual(obj1[key], obj2[key])) return false
            } else if (obj1[key] !== obj2[key]) return false
        } else {
            return false
        }
    }
    return true
}

function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

let obj1 = {
    name: 'chaos',
    age: 12,
    gender: 'male',
    info: {
        address: 'nanjing',
    }
}

let obj2 = {
    name: 'chaos',
    age: 12,
    gender: 'male',
    info: {
        address: 'nanjing',
    }
}

console.log(isEqual(obj1, obj2));