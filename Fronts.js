class Node {
    constructor(data) { 
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() { 
        this.head = null;
    }

    addFront(val) {
        let new_node = new Node(val)
        if (!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront() {
        this.head = this.head.next
        return this
    }

    front() {
        if (!this.head) { 
            return null;
        }
        return this.head.data
    }

}

list = new SLL();
list.addFront(18)
console.log(list)
list.addFront(5)
console.log(list)
list.addFront(73)
console.log(list)
list.addFront(4)
console.log(list)
list.removeFront(list)
console.log(list)
console.log(list.front())