function BubbleSort(arr){
    let n = arr.length
    for(let i=n-1;i>=1;i--){
        let flag = 0
        for(let j=1;j<=i;j++){
            if(arr[j-1]>arr[j]){
                [arr[j-1],arr[j]]=[arr[j],arr[j-1]]
            }
            flag = 1
        }
        if(flag==0) return
    }
}
let arr = [49,38,65,97,76,13,27,49]
BubbleSort(arr)
console.log(arr);