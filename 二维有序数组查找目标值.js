let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
function findInNumberArray(arr, target) {
    if (arr.length === 0) return false
    let row = 0
    let col = arr[0].length - 1
    while (row < arr.length && col >= 0) {
        if (target === arr[row][col]) return true
        else if (target < arr[row][col]) {
            col--
        } else{
            row++
        }
    }
    return false
}
console.log(findInNumberArray(arr, 10)) // true