function QuickSort(nums,low,high){
    if(low>=high) return
    let p = partition(nums,low,high)
    QuickSort(nums,low,p-1)
    QuickSort(nums,p+1,high)
}
function partition(nums,low,high){
    let i = low
    let j = high
    let tmp = nums[low]
    while(i<j){
        while(i<j && nums[j]>=tmp) j--
        if(i<j){
            nums[i] = nums[j]
            i++
        }
        while(i<j && nums[i]<tmp) i++
        if(i<j){
            nums[j] = nums[i]
            j--
        }
    }
    arr[i] = tmp
    return i
}
let arr = [49,38,65,97,76,13,27,49]
QuickSort(arr,0,arr.length-1)
console.log(arr);