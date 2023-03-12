class Node {
    constructor (key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor () {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    push (key, value) {
        const node = new Node(key, value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
        return node;
    }

    pop (node) {
        if (!node.next && !node.prev) {
            this.head = null;
            this.tail = null;
        } else if (!node.prev) {
            this.head = node.next;
            node.next.prev = null;
        } else if (!node.next) {
            this.tail = node.prev;
            node.prev.next = null;
        } else {
            const prev = node.prev;
            const next = node.next;

            prev.next = next;
            next.prev = prev;
        }

        this.size--;
    }
}

class LRUCache {
    constructor (size) {
        this.size = size;
        this.cache = {};
        this.DLL = new DLL();
    }

    get (key) {
        if (!this.cache[key]) return null;

        const node = this.cache[key];

        this.DLL.pop(node);
        this.cache[key] = this.DLL.push(key, node.value);

        return node.value;
    }

    set (key, value) {
        if (this.size === this.DLL.size && !this.cache[key]) {
            const currKey = this.DLL.head.key;

            this.DLL.pop(this.DLL.head);
            
            delete this.cache[currKey];
            this.cache[key] = this.DLL.push(key, value);
        } else if (this.cache[key]) {
            this.DLL.pop(this.cache[key]);
            this.cache[key] = this.DLL.push(key, value);
        } else {
            this.cache[key] = this.DLL.push(key, value);
        }
    }

    print () {
        for (const key in this.cache) {
            console.log(`${key} => ${this.cache[key].value}`);
        }
    }
}

module.exports = LRUCache;
