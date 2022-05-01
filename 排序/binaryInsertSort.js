function binaryInsertionSort(arr) {
    let n = arr.length
    if (n <= 1) return
    let low, high, mid, tmp
    for (let i = 1; i < n; i++) {
        low = 0
        high = i - 1
        tmp = arr[i]    // 当前待插入元素
        while (low <= high) {
             // mid = Math.floor((high - low)/2) + low  // 待比较元素，中间节点
            mid = ((high - low) >> 1) + low
            if(arr[mid]<=tmp){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
        // 找到待插入位置low后，将其之后的元素全部后移一位
        for(let j=i;j>low;j--){
            arr[j] = arr[j-1]
        }
        arr[low] = tmp
    }
}
let arr = [49,38,65,97,76,13,27,49]
binaryInsertionSort(arr)
console.log(arr);