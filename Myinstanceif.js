function Myinstanceof(A, B) {
    let proto = Object.getPrototypeOf(A)
    let prototype = B.prototype
    while(proto){
        if(prototype === proto) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}
console.log({} instanceof Array);
console.log(Myinstanceof({},Array));