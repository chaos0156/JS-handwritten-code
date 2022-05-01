function InsertSort(arr){
    let n = arr.length
    if(n<=1) return
    for(let i=1;i<n;i++){
        let tmp = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>tmp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = tmp
    }
}
let arr = [49,38,65,97,76,13,27,49]
InsertSort(arr)
console.log(arr);