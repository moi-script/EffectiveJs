// IN modern javascript latest version like this is already using strict mode by 
// default


// Avoid declaring global variables
// Declare variables as locally as possible
// avoid adding properties to the global object
// use the gloal object for platform feature detection


// 

// if (typeof window !== "undefined") {
//   console.log("Running in browser");
// }

// if (typeof global !== "undefined") {
//   console.log("Running in Node.js");
// }

// if (typeof globalThis !== "undefined") {
//   console.log("Universal global object available");
// }


// Problem but when avoiding global should we ignore the caching strategies?

// bad practice
const cache = {}; // this object can be change everywhere 

function getData(key) {
  if (cache[key]) return cache[key];

  const result = expensiveOperation(key);
  cache[key] = result;
  return result;
}


// Good

// cache.js
// const cache = new Map(); // module base, this is more controlled part

export function getCached(key) {
  return cache.get(key);
}

export function setCached(key, value) {
  cache.set(key, value);
}

// import { getCached, setCached } from "./cache.js";



// closure based cache 
// fully encapsulated
// imposible to tamper
// but only good when tied to one function 
function createFetcher() {
  const cache = new Map();

  return function fetchData(key) {
    if (cache.has(key)) return cache.get(key);

    const result = expensiveOperation(key);
    cache.set(key, result);
    return result;
  };
}

// const fetchData = createFetcher();




// Memoization pattern

// function memoize(fn) {
//   const cache = new Map();

//   return function (arg) {
//     if (cache.has(arg)) return cache.get(arg);

//     const result = fn(arg);
//     cache.set(arg, result);
//     return result;
//   };
// }

// const fastFn = memoize(expensiveOperation);




function expensiveOperation(n) {
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(n + i);
  }
  return result;
}

// Memoized version
function memoize(fn) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) return cache.get(arg);

    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

// Memoization is for reusing the result of a heavy (or repeated)
// computation when the same inputs occur again.


const cachedOperation = memoize(expensiveOperation);

// ---- TEST ----
console.time("Without cache - first call");
expensiveOperation(10);
console.timeEnd("Without cache - first call");

console.time("Without cache - second call");
expensiveOperation(10);
console.timeEnd("Without cache - second call");

console.log("------------");

console.time("With cache - first call");
cachedOperation(10);
console.timeEnd("With cache - first call");

console.time("With cache - second call");
cachedOperation(10);
console.timeEnd("With cache - second call");