function partial(fn){
    let args = [].slice.call(arguments)
    return function(){
        let newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this,newArgs)
    }
}

//ES6:
function partial(fn, ...arg) {
    return (...args) => fn(...arg, ...args)
}

let add = partial(function(a,b,c,d){
    return a+b+c+d
},1,2,3)

let a = add(4) 
console.log(a);