class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    add(value) {
        let node = new Node(value)

       

        if (this.head == null) {
            this.head = node
        } else {
            let current = this.head

            while (current.next !== null) {
                current = current.next
            }

            current.next = node
        }
        this.size++
    }

    isPalindrome() {
        let slow = this.head
        let ispalin = true
        let stack = []

        while (slow !== null) {
            stack.push(slow.data)
            slow = slow.next
        }

        slow = this.head

        while (slow !== null) {
            let i = stack.pop()
            if (slow.data != i) {
                ispalin = false
                break
            } else ispalin = true

            slow = slow.next
        }
        return `The list is a ${ispalin} palindrome`;
    }
}

const ll = new LinkedList()

ll.add(1)
ll.add(2)
ll.add(3)
ll.add(2)
ll.add(1)

ll.isPalindrome()