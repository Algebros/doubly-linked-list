const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
    let node = new Node(data);
        if (!this._head) {
            this._head = node;
            this._tail = node;
        } else {
            let currentNode = this._tail;
            node.prev = currentNode;
            currentNode.next = node;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {
        if(this._head) {
            return this._head.data
        }        
        return null;
    }

    tail() {
        if(this._head) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        let next = currentNode.next;
        let prev = currentNode.prev;
        let newNode = new Node(data, prev, currentNode);
        currentNode.prev = newNode;
        prev.next = newNode;     
    }

    isEmpty() {
        if(this.length == 0) {
            return true;
        }
        return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        let last = currentNode.prev;
        let next = currentNode.next;
        last.next = next;
        next.prev = last;
    }

    reverse() {
        let currentNode = this._head;
        let index = 0;
        let arr = [];
        while (index < this.length) {
            arr.push(currentNode);
            currentNode = currentNode.next;
            index++;
        }
        arr.reverse();
        for (let i = 0; i < arr.length; i++) {
            let xxx = arr[i].data;
            let node = this.append(xxx);
            if(i == 0) {
                this._head = node;
            }
        }
        arr.reverse();
        arr.forEach(element => {
            element.next = null;
            element.prev = null;
        });
        arr = null;
    }

    indexOf(data) {
        let currentNode = this._head;
        let index = 0;
        while (index < this.length) {
            if(currentNode.data == data) return index;
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }
}

module.exports = LinkedList;
