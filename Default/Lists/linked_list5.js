class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(value) {

        let current;

        let node = new Node(value)
        if(this.head === null) {
            this.head = node
        } else {

            current = this.head

            while(current && current.next) {
                current = current.next
            }

            current.next = node 
        }
        this.size++
    }

    printList() {
        let current = this.head
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }

    insertAt(value, index) {
        let current,previous

        if(index < 0 && index > this.size) {
            return 
        } else {

            while(current && current.next) {
                
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const ll = new LinkedList()

ll.add(12)
ll.add(5)
ll.printList()

