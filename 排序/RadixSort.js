function radixSort(arr){
    let round = getRound(arr)
    for(let i=0;i<round;i++){
        let buckets = []
        // 分配操作
        for(let j=0;j<arr.length;j++){
            let index = ~~(arr[j] / (10 ** i)) % 10   // ~~是取整运算
            if(buckets[index] == null){
                buckets[index] = [] // 初始化桶
            }
            buckets[index].push(arr[j])
        }
        // 收集操作
        let pos = 0
        for(let j=0;j<buckets.length;j++){
            if(buckets[j]!= null){
                for(let k=0;k<buckets[j].length;k++){
                    arr[pos++] =  buckets[j][k]
                }
            }
        }
    }
}
function getRound(arr){
    let n = arr.length
    let k = 0
    for(let i=1;i<n;i++){
        if(arr[k]<arr[i]){
            k = i
        }
    }
    return arr[k].toString().length
}
let arr = [100,3,2,1]
radixSort(arr)
console.log(arr);