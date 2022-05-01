function SelectSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let k = i // 用于记录最小值的下标
        for (let j = i + 1; j < n; j++) {
            if (arr[k] > arr[j]) {
                k = j
            }
        }
        [arr[i], arr[k]] = [arr[k], arr[i]]
    }
}
let arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04]
SelectSort(arr)
console.log(arr);