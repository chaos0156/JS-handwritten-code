function Watcher(callback,vm){
    this.vm = vm    // vue实例
    this.callback = callback    // 回调函数
    this.value = this.get() // 将自己添加到消息订阅器Dep中
}

Watcher.prototype = {
    // 触发回调方法
    update(){
        this.run()
    },
    run(){
        let val = this.get()    // 取到最新值
        let oldVal = this.value
        if(val !== oldVal){
            this.value = val
            this.callback.call(this.vm,val,oldVal)  //执行Compile中绑定的回调，更新视图
        }
    },
    get(){
        Dep.target = this
    }
}