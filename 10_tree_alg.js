const tree = [
    { 
        v: 13,
        c: [
            { 
                v: 65,
                c: [
                    { 
                        v: 13
                    }
                ]
            },
            { 
                v: 4,
                c: [
                    { 
                        v: 53,
                        c: [
                            { 
                                v: 16
                            }
                        ]
                    }
                ]
            },
        ]
    },
    { 
        v: 1
    },
    { 
        v: 6,
        c: [
            { 
                v: 11
            }
        ]
    }
]

const recursive = (tree) => {
    let value = 0    
    tree.forEach(node => {            
        value += node.v
        if(!node.c){
            return node.v
        }   
        value += recursive(node.c)
    })
    return value
}

console.log(recursive(tree))

const iteration = (tree) => {
    if(!tree.length){
        return 0
    }
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        if(node.c) {
            node.c.forEach(child=> stack.push(child))
        }
    }
    return sum
}

console.log(iteration(tree))