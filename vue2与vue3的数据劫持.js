function defineProperty(obj, prop, val) {
    if (typeof obj === 'object') observe(obj)
    Object.defineProperty(obj, prop, {
        configurable,
        enumerable,
        set(value) {
            if (typeof value) observe(prop)
            val = value
        },
        get() {
            return val
        }
    })
}

function observe(obj) {
    if (typeof obj !== 'object' || obj === null) return
    Object.keys(obj).forEach(key => {
        defineProperty(obj, key, obj[key])
    })
}


let obj = {
    age: 12,
    name: 'chaos'
}
let handler = {
    get(obj, key) {
        return key in obj ? obj[key] : 66
    },
    set(obj, key, val) {
        obj[key] = val
        return true
    }
}
let proxyObj = new Proxy(obj, handler)