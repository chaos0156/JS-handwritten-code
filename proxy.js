let onWatch = (obj, setBind, getLogger) => {
    let handler = {
        get(target, proprty, receiver) {
            getLogger(target, proprty)
            return Reflect.get(target, proprty, receiver)
        },
        set(target, proprty, value, receiver) {
            setBind(value, proprty)
            Reflect.set(target, proprty, value, receiver)
        }
    }
    return new Proxy(obj, handler)
}
let testObj = { a: 1, b: 2 }
let p = onWatch(testObj, (val, property) => {
    console.log(`检测到有人在修改${property}的值为${val}`)
}, (target, property) => {
    console.log(`'${property}' = ${target[property]}`);
})
p.a = 5 // 检测到有人在修改a的值为5
p.a // 'a' = 5