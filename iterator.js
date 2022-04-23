let obj = {
    nums: ['1', '2', '3', '4', '5', '6', '7'],
    [Symbol.iterator]() {
        let index = 0;
        const _this = this
        return {
            next() {
                if (index < _this.nums.length) {
                    const res = {
                        done: false,
                        value: _this.nums[index]
                    }
                    index++
                    return res
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}
for (let i of obj) {
    console.log(i)
}