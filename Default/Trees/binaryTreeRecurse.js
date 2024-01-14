function traverse(root) {
    let node = root

    if (node.left) {
        traverse(node.left);
    }

    if (node.pitch) {
        // Do smth with the leaf node
    }

    if (node.right) {
        traverse(node.right)
    }
}

var minDepth = function (root) {
    if (!root) {
        return 0;
    }

    let min = Infinity
    let minRight = 0
    let minLeft = 0

    if (root.right) {
        minRight = Math.min(min, minDepth(root.right))

    }

    if (root.left) {
        minLeft = Math.min(min, minDepth(root.left))

    }

    if (minRight > minLeft) {
        min = minLeft
    } else min = minRight

    return min
}