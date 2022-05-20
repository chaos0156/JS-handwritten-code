function defineReactive(data,name,val){
    observe(val)
    const dep = new Dep()
    Object.defineProperty(data,name,{
        enumerable:true,
        configurable:true,
        get(){
            // 当有访问属性操作时，判断是不是已经存在的订阅者，如果不存在，则新添加订阅者
            if(true){
                dep.add(watcher)
            }
            return val
        },
        set(newVal){
            if(val === newVal) return
            console.log(`${name}属性被修改，由${val}修改成${newVal}`);
            val = newVal
            // 通知订阅者们
            dep.notify()
        }
    })
}
function observe(data){
    if(!data || typeof data !== 'object') return
    Object.keys(data).forEach((key)=>{
        defineReactive(data,key,data[key])
    })
}

// 添加Dep
function Dep(){
    this.watchers = []
}
Dep.prototype = {
    // 通知所有订阅者，数据发生变化
    notify(watcher){
        this.watchers.forEach((watcher)=>{
            watcher.update()
        })
    },
    // 添加新的订阅者
    add(watcher){
        this.watchers.push(watcher)
    }
}



let obj = {
    name:'chaos',
    age:18,
    school:{
        middleSchool:'cc',
        university:'njupt'
    }
}

observe(obj)
obj.name = 'why'
obj.school.middleSchool = 'ccschool'