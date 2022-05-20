const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = []
rl.on('line', function (line) {
    inputs.push(line)
    if(inputs.length === 5) console.log('@@@@')
    if(inputs.length === 6) rl.close()
})
// 输入结束后处理数据
rl.on('close', function () {
    inputs.forEach((item,index)=>{
        console.log(`${index} === ${item}`)
    })
 })