function inOrder(root) {
    if(!root) return []
    let stack = []
    let cur = root
    let res = []
    while(cur || stack.length ) {
        if(cur.left){
            stack.push(cur)
            cur = cur.left
        }else{
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
}

function traversal(root) {
    let res = []
    function DFS(root) {
        if(!root) return
        DFS(root.left) 
        res.push(root.val)
        DFS(root.right) 
    }
    DFS(root)
    return res
}