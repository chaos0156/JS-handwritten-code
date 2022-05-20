const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n = 0;
let inputs = []
rl.on('line', function (line) {
    if (n === 0) {
        n = parseInt(line)
    } else {
        inputs.push(line)
    }
    if (inputs.length === n) {
        for (let name of inputs) {
            let res = 0
            let s = 26
            let map = new Map()
            name.split('').forEach(letter=>{
                map.set(letter,map.has(letter) ?  map.get(letter) + 1 : 1)
            })
            let arr = Array.from(map).sort((a,b)=>b[1]-a[1])
            arr.forEach(item=>{
                res += item[1] * s
                s--
            })
            console.log(res)
        }
        // 置空初始值
        n = 0
        inputs = []
    }
})
