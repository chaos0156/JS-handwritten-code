//ES6语法
function getDepth(arr) {
    if (!Array.isArray(arr)) return 0
    let n = arr.length
    if (n === 0) return 0
    let depth = 1
    while (arr.some(item => Array.isArray(item))) {
        depth++
        arr = [].concat(...arr)
    }
    return depth
}

//递归
function getDepth(arr) {
    if (!Array.isArray(arr)) return 0
    let n = arr.length
    if (n === 0) return 0
    let depth = 0
    let depths = []
    arr.forEach(item=>{
        if(Array.isArray(item)){
            depth = getDepth(item)
        }
        depths.push(depth)
    })
    return 1 + Math.max(...depths)
}


console.log(getDepth([])); // 0
console.log(getDepth([1])); // 1
console.log(getDepth([1, [2]])); // 2
console.log(getDepth([1, 2, [3, 4, [5]]])); // 3
console.log(getDepth(1)) // 0
console.log(getDepth([])) // 0
console.log(getDepth([1])) // 1
console.log(getDepth([1, [2]])) // 2
console.log(getDepth([[1], [2, [3]]])) // 3

