function shallowCopy(obj){
    if(typeof obj !== 'object') return
    let newObject = Array.isArray(obj)?[]:{}
    Object.keys(obj).forEach(key=>{
        newObject[key] = obj[key]
    })
    return newObject
}
let b = {a:1,c:2}
console.log(shallowCopy(b))
let a = [1,2,3,4]
console.log(shallowCopy(a));