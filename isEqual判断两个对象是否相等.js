function isEqual(obj1, obj2) {
    // 参数类型判断
    let isObj = type(obj1) === 'object' && type(obj2) === 'object'
    if (!isObj) return false
    // 判断对象长度是否相同
    let arr1 = Reflect.ownKeys(obj1)
    let arr2 = Reflect.ownKeys(obj2)
    if (arr1.length !== arr2.length) return false
    arr1.forEach(key => {
        if (arr2.includes(key)) {
            if (type(obj1[key]) === 'object' || type(obj2[key]) === 'object') {
                if (!isEqual(obj1[key], obj2[key])) return false
            } else if (obj1[key] !== obj2[key]) return false
        } else {
            return false
        }
    })
    return true
}

function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

let obj1 = {
    name: 'chaos',
    age: 12,
    gender: null,
    info: {
        address: 'nanjing',
    }
}

let obj2 = {
    name: 'chaos',
    age: 12,
    gender: null,
    info: {
        address: 'nanjing',
    }
}

console.log(isEqual(obj1, obj2));