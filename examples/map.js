const LRUCache = require('../src/map');

const cache = new LRUCache(5);

cache.set(1, 'a');
cache.set(2, 'b');
cache.set(3, 'c');

/**
1 => a
2 => b
3 => c
*/
cache.print();

cache.get(1); //=> 'a'
cache.set(4, 'e');
cache.set(3, 'f');
cache.set(4, 'g');
cache.set(5, 'h');
cache.get(3); // => 'f'
cache.set(5, 'i');
cache.set(6, 'j');
cache.set(6, 'k');
cache.set(9, 'l');

/**
4 => g
3 => f
5 => i
6 => k
9 => l
*/
cache.print();
