let minDepth = function (root) {
    if (!root) {
        return 0;
    }

    let stack = [{node: root, depth: 1}];
    let min = Infinity;

    while(stack.length > 0) {
        let {node, depth} = stack.pop()

        if(!node.left && !node.right) {
            min = Math.min(min, depth)
        }

        if(node.left) {
            stack.push({node: node.left, depth: depth++})
        }

        if(node.right) {
            stack.push({node: node.right, depth: depth++})
        }
    }

    return min;
}

const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

