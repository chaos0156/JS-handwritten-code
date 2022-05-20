function printMatrix(arr) {
    let m = arr.length
    let n = arr[0].length
    let res = []
    // 左上角，从 0 列 到 n-1 列
    for (let i = 0; i < n; i++) {
        for (let row = 0, col = i; row < m && col >= 0; row++, col--) {
            res.push(arr[row][col])
        }
    }
    //右下角， 从 1行 到 m-1行
    for (let i = 1; i < m; i++) {
        for (let row = i, col = n - 1; row < m && col >= 0; row++, col--) {
            res.push(arr[row][col])
        }
    }
    return res
}
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(printMatrix(arr));

/*
[
   1,  2, 5,  3, 6,
   9,  4, 7, 10, 8,
  11, 12
]
*/