function preOrder(root) {
    if(!root) return []
    let res = []
    let stack = [root]
    while(stack.length){
        let node = stack.pop()
        res.push(node.val)
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left)
    }
    return res
}


function traverlsal(root){
    let res = []
    function DFS(root){
        if(!root) return
        res.push(root.val)
        DFS(root.left)
        DFS(root.right)
    }
    DFS(root)
    return res
}