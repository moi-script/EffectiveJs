// basic implementation of prototype object is own vs inherited

// when we say own

const obj = {a : 10};

console.log(obj.hasOwnProperty("a"));


console.log(obj.toString())
console.log(obj.hasOwnProperty('toString')) // as you can see we can use toString in this object but we dont own them
// that is called inherited


// how is object created then?

// object is just being a wrapper of an already existed object, which is like a nested object now
// now all of the nested object had it own properties that can be use by upper level