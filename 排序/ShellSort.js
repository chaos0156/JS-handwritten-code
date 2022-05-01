function ShellSort(arr) {
    let n = arr.length
    // gap 即为增量
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let j = i
            let current = arr[i]    // 待插入元素
            while (j - gap >= 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap]
                j -= gap
            }
            arr[j] = current
        }
    }
}
let arr = [49, 38, 65, 97, 76, 13, 27, 49, 55, 04]
ShellSort(arr)
console.log(arr);