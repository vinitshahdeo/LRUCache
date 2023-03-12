# LRU Cache

A basic implementation of LRU cache in JavaScript using Map and a doubly linked list. 

- `get(key)`: Get the value of key from cache in `O(1)` time.
- `set(key, value)`: Set the key-value to the cache in `O(1)` time.
- `print()`: Print key-value present in the cache

## Usage

```javascript

const cache = new LRUCache(3); // 3 is the max-size of cache

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

```

## Examples

Please refer to the examples:
1. [DLL.js](./examples/DLL.js) - Implementation using doubly linked list.
2. [map.js](./examples/map.js) - Implementation using map.
