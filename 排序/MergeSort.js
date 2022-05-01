function MergeSort(arr) {
    //采用自上而下的递归方法
    let n = arr.length
    // 递归要有终止条件
    if (n < 2) return arr
    let mid = n >> 1
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(MergeSort(left), MergeSort(right))
}
function merge(left, right) {
    let res = []
    while (left.length && right.length) {
        // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length) res.push(left.shift())
    while (right.length) res.push(right.shift())
    return res
}
let arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04]
// console.log(MergeSort(arr));


function MergeSort2(arr, start, end) {
    if (start == end) return
    let mid = start + (end - start >> 1)
    MergeSort2(arr, start, mid)
    MergeSort2(arr, mid + 1, end)
    let i = start
    let j = mid + 1
    let temp = []
    while(i<=mid && j<=end){
        if(arr[i]<arr[j]){
            temp.push(arr[i++])
        }else{
            temp.push(arr[j++])
        }
    }
    while(i<=mid) temp.push(arr[i++])
    while(j<=end) temp.push(arr[j++])
    for(let i=start,k=0;i<=end;i++){
        arr[i] = temp[k++]
    }
}
MergeSort2(arr,0,arr.length-1)
console.log(arr);