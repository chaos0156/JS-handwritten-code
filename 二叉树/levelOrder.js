function levelOrder(root) {
    if( !root ) return []
    let queue = [root]
    let res = []
    while(queue.length){
        let len = queue.length
        while(len-- > 0){
            let node = queue.shift()
            res.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return res
}