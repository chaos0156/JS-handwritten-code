Object.prototype.Myfreeze=function(obj){
    // 判断冻结的是否是一个对象
    if(Object.prototype.toString.call(obj).slice(8,-1) !== 'Object') return 
    Object.keys(obj).forEach(key=>Object.defineProperty(obj,key,{
        // 不能删除，不能修改descripter
        configurable:false,
        // 不能修改值
        writable:false
    }))
    // 不能添加新属性
    Object.seal(obj)
}

const obj = {
    prop: 42
  };
  
  Object.Myfreeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);
  // expected output: 42
  obj.newp = 123
  console.log(obj);
  Object.defineProperty(obj,'prop',{
      configurable:true,
      writable:true
  })    //TypeError: Cannot redefine property: prop
  obj.prop = 22
  console.log(obj);