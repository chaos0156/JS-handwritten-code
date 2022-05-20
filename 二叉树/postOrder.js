function postOrder(root) {
    if(!root) return []
    let res = []
    let stack = [root]
    while(stack.length){
        let node = stack.pop()
        res.push(node.val)
        if(node.left) stack.push(node)
        if(node.right) stack.push(node)
    }
    return res.reverse()
}

function traversal(root) {
    let res = []
    function DFS(root) {
        if(!root) return
        DFS(root.left)
        DFS(root.right)
        res.push(root.val)
    }
    DFS(root)
    return res
}