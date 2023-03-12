class LRUCache {
    constructor (size) {
        this.size = typeof size === 'number' ? size : Infinity;
        this.cache = new Map();
    }

    /**
     * 
     * Get value of the key from the cache
     */
    get (key) {
        const value = this.cache.get(key);

        if (!value) return null;

        // Delete and set again to maintain the order
        this.cache.delete(key);
        this.cache.set(key, value);
    }

    /**
     * 
     * Set the key-value pair in cache 
     */
    set (key, value) {
        // If cache size is full and the key is new, remove the lru item
        if (this.cache.size === this.size && !this.cache.get(key)) {
            const firstKey = this.cache.keys().next().value;

            this.cache.delete(firstKey);
            this.cache.set(key, value);
        }

        this.cache.delete(key);
        this.cache.set(key, value);
    }

    print () {
        for (let [key, value] of this.cache) {
            console.log(`${key} => ${value}`);
        }
    }
}

module.exports = LRUCache;