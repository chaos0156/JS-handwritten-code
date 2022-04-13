let obj = {
    name: 'xxx',
    age: 12,
    info: {
        address: [
            {
                city: 'nanjing'
            }
        ]
    }
}
let str = '我是${obj.name},我今年${obj.age},我家在${obj.info.address[0].city}'
function handler(str, obj) {
    let reg = /\$\{(.*?)\}/g
    return str.replace(reg, function (_, p1) {
        let paths = p1.replace(/\[(\d+)\]/g, '.$1').split('.')
        let i = 1
        let res = obj
        while (i < paths.length) {
            res = res[paths[i]]
            i++
        }
        return String(res)
    })
}
let s = handler(str, obj)
console.log(s)