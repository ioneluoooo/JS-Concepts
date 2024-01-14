class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node
        let node = new Node(element)

        // stores the current node
        let current;

        // if list is Empty add the 
        // element and make it the head
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head

            // iterate to the end of the 
            // list
            while (current && current.next) {
                current = current.next
            }

            // add node
            current.next = node
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log('Please enter a valid index.');
        } else {
            // creates a new node
            let node = new Node(element)
            let curr, prev;

            curr = this.head

            //add the element
            //to the first index
            if (index == 0) {
                node.next = this.head
                this.head = node
            } else {
                curr = this.head;
                let it = 0


                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    // dapustim curr = 1
                    // then prev = 1
                    prev = curr;
                    // then curr.next = 2
                    // means curr = 2
                    // so it will be prev = 1 and curr = 2
                    curr = curr.next
                }

                node.next = curr;
                prev.next = node
            }
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log('Please enter a valid index');
        } else {
            let curr, prev, it = 0;
            curr = this.head
            prev = curr

            // deleting first element
            if(index == 0) {
                this.head = curr.next
            } else {
                //iterate over the list to the
                //position to remove an element 
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //remove the element
                prev.next = curr.next
                // dapustim prev = 20, curr = 30
                // curr.next = 40
                // so prev.next = 40, skipping the current node that is, curr = 30
            }
            this.size--;

            //return the removed element
            return curr.element
        }
    }

    removeElement(element) {
        let current = this.head
        let prev = null;

        //iterate over the list 
        while(current != null) {

            // comparing element with current
            // element if found then remove
            // and return true
            if(current.element === element) {
                if(prev == null) {
                    // if the element is first on the list
                    // we skip it(removing from the list)
                    this.head = current.next;
                } else {
                    // if the element is not first then just skip the current element(our element)
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current
            current = current.next
        }
        return -1
    }

    indexOf(element) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while(current != null) {
            // compare each element of the list
            // with given element
            if(current.element === element) {
                return count;
            } 
            count++;
            current = current.next
        }
        // not found
        return -1
    }

    isEmpty() {
        return this.size == 0
    }

    size_of_list() {
        console.log(this.size)
    }

    printList() {
        let curr = this.head
        let str = ''
        while(curr) {
            str += curr.element + ' ';
            curr = curr.next
        }
        console.log(str)
    }
}

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());
 
// adding element to the list
ll.add(10);
 
// prints 10
ll.printList();
 
// returns 1
console.log(ll.size_of_list());
 
// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
 
// returns 10 20 30 40 50
ll.printList();
 
// prints 50 from the list
console.log("is element removed " + ll.removeElement(50));
 
// prints 10 20 30 40
ll.printList();
 
// returns 3
console.log("Index of 40 " + ll.indexOf(40));
 
// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);
 
ll.printList();
 
// returns false
console.log("is List Empty ? " + ll.isEmpty());
 
// remove 3rd element from the list
console.log(ll.removeFrom(3));
 
// prints 10 20 60 40
ll.printList();