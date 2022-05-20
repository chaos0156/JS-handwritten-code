const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
let n = 2   //输入行数
let inputs = []   // 获取输入数据
rl.on('line',function(line) {
    inputs.push(line)
    if( inputs.length === n ){
        let k  = parseInt(inputs[1])
        console.log(inputs[0].slice(0,k))
        // 处理完一组数据后需要清空inputs，使其容纳下一组数据
        inputs = []
    }
})