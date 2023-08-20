function withCache(fn) {
  const cacheArray = [];
  const MAX_CACHE_SIZE = 10;

  return function(...args) {
    const key = JSON.stringify(args);
    const foundCacheElement = cacheArray.find(element => element.key === key);

    if (foundCacheElement) {
      console.log('Result from cache!');
      return foundCacheElement.value;
    }

    const result = fn(...args);
    
    cacheArray.push({ key, value: result });
    
    if (cacheArray.length > MAX_CACHE_SIZE) {
      cacheArray.shift();
    }

    console.log('Result from function!');
    return result;
  };
}

// Тестуємо
function testFunction(a) {
  console.log('Function is called!');
  return a;
}

const cachedTestFunction = withCache(testFunction);

console.log(cachedTestFunction(1));
console.log(cachedTestFunction(1));
console.log(cachedTestFunction(2));
console.log(cachedTestFunction(3));
console.log(cachedTestFunction(2));
console.log(cachedTestFunction(4));
console.log(cachedTestFunction(5));
console.log(cachedTestFunction(6));
console.log(cachedTestFunction(4));
console.log(cachedTestFunction(7));
console.log(cachedTestFunction(8));
console.log(cachedTestFunction(5));
console.log(cachedTestFunction(9));
console.log(cachedTestFunction(10));
console.log(cachedTestFunction(11));
console.log(cachedTestFunction(9));
console.log(cachedTestFunction(1));
