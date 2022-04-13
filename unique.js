let arr = [1,2,3,4,5,1,2]
let a = [...new Set(arr)]
let b = Array.from(new Set(arr))
console.log('a',a);
console.log('b',b);
function unique(arr) {
    return arr.filter((i,index,arr)=>{
        return  arr.indexOf(i) === index
    })
}
console.log('c',unique(arr));

function uniqueTWO(arr) {
    return arr.reduce((acc,cur,index)=>{
        return [].concat(acc, arr.indexOf(cur) === index ? cur : [] )
    })
}
console.log('d',uniqueTWO(arr));