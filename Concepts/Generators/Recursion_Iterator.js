//Depth first tree traversal recursively iteration
function binaryTreeNode(value) {
    let node = { value }
    node[Symbol.iterator] = function* depthFirst() {
        yield node.value
        //* yield*  recursively invokes
        //* the generator or iterable that is being delegated
        if (node.left) yield* node.left
        if (node.right) yield* node.right
    }
    return node
}

const tree = (() => {
    const root = binaryTreeNode("root");
    root.left = binaryTreeNode("branch left");
    root.right = binaryTreeNode("branch right");
    root.left.left = binaryTreeNode("leaf L1");
    root.right.right = binaryTreeNode("leaf R2");
    root.right.left = binaryTreeNode("leaf R3");
    return root;
})();

const treeIterator = tree[Symbol.iterator]();

for(const value of treeIterator){
    console.log(value)
}