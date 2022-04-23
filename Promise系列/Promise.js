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
