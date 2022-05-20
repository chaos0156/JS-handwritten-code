function Promise(exexutor) {
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callback = []
    const self = this

    function resolve(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fullfilled'
        self.PromiseResult = data
        setTimeout(() => {
            self.callback.forEach(item => {
                item.onResolved(data)
            })
        })
    }

    function reject(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        setTimeout(() => {
            self.callback.forEach(item => {
                item.onRejected(data)
            })
        })
    }
    try {
        exexutor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function (onResolved, onRejected) {
    const self = this
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason
        }
    }
    if (typeof onResolved !== 'function') {
        onResolved = value => value
    }
    return new Promise((resolve, reject) => {
        function callback(type) {
            try {
                // 获取执行回调的返回结果
                let res = type(self.PromiseResult)
                if (res instanceof Promise) {
                    res.then(value => {
                        resolve(value)
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    resolve(res)
                }
            } catch (e) {
                reject(e)
            }
        }
        if (self.PromiseState === 'fullfilled') {
            setTimeout(() => {
                callback(onResolved)
            })
        }
        if (self.PromiseState === 'rejected') {
            setTimeout(() => {
                callback(onRejected)
            })
        }
        if (self.PromiseState === 'pending') {
            self.callback.push({
                // 状态修改完毕后[执行]，这个函数会执行
                onResolved: function () {
                    callback(onResolved)
                },
                onRejected: function () {
                    callback(onRejected)
                }
            })
        }
    })
}