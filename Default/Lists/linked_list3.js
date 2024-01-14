class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    //Insert at the first index node
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    //Insert at the last index
    insertLast(value) {
        let node = new Node(value);
        let current;

        // if empty
        if (!this.head) {
            this.head = node
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node;
        }

        this.size++
    }

    //Insert At index
    insertAt(value, index) {  
        let current, previous;
        if(index < 0 && index > this.size) {
            return;
        }

        if(index === 0) {
            this.insertFirst(value)
            return
        }

        const node = new Node(data);
        
        //Set current to first
        current = this.head
        let count = 0

        while(count < index) {
            previous = current; // Node before the index
            current = current.next // Node after the index
            count++;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    getAt(index) {
        if(index < 0 || index > this.size) {
            return null;
        }
        let current = this.head
        let count = 0

        while(current) {
            if(count === index) {
                console.log(current.value)
            } count++
            current = current.next
        }

        return null;
    }

     //Print list data
     printList() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    // reversePrint() {
    //     let current = this.head
    //     if(this.size === 0) {
    //         return 'There are no elements'
    //     } else {
    //         while(current) {

    //         }
    //     }
    // }

    // Recursive approach
    printReverse() {
        this._printReverse(this.head)
    }

    _printReverse(node) {
        if(node === null) {
            return
        }
        this._printReverse(node.next)
        console.log(node.value)
    }

    //Alternative

    printReverseList() {
        const reversedList = this._reverseList(this.head)

        let current = reversedList;
        while(current) {
            console.log(current.value)
            current = current.next
        }
    }

    _reverseList(node) {
        let prev = null;
        let current = node;
        let next = null
        while(current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev 
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(300)
ll.insertFirst(200)
ll.insertLast(400)

ll.printReverseList()