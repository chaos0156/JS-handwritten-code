//input ["a","b","c","d","e","f","g"]   
//output {"a":{"b":{"c":{"d":{"e":{"f":"g"}}}}}}
function arrToObj(arr) {
    let n = arr.length
    let prev = { [arr[n - 2]]: arr[n - 1] }
    for (let i = n - 3; i >= 0; i--) {
        prev = { [arr[i]]: prev }
    }
    return prev
}
let arr = ["a","b","c","d","e","f","g"] 
console.log(arrToObj(arr))