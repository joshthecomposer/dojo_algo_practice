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
    display() {
        let runner = this.head
        let result = ''
        while (runner !== null) {
            if (runner.next === null) {
                result += runner.data
                return result
            }
            result += runner.data + ','
            runner = runner.next
        }
    }

}

list = new SLL();
list.addFront(18)
list.addFront(5)
list.addFront(73)
list.addFront(4)
list.removeFront(list)
console.log(list.display())