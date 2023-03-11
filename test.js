const LRUCache = require('./src');

const cache = new LRUCache(3);

cache.set(1, 'a');
cache.set(2, 'b');
cache.set(3, 'c');

/**

1 => a
2 => b
3 => c

*/
cache.print();

cache.get(1); //=> a
cache.set(4, 'e');

/**

3 => c
1 => a
4 => e

*/
cache.print();
