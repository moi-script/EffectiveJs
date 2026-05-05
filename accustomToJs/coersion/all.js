// 3 + true; // 4


// "hello"(1); // error: not a function
// const m = null.x = 10; // since 
// console.log(m);
// error: cannot read property 'x' of null


// 2 + 3;
// "hello" + " world"; // "hello world"


// Concatenation happens
"2" + 3; // "23" 
2 + "3"; // "23"

1 + 2 + "3"; // "33"
(1 + 2) + "3"; // "33"
1 + "2" + 3; // 123
(1 + "2") + 3; // "123"



"17" * 3; // 51 this works for operator (multiplication tries to convert both to number ) | (+ -> convert to string if any of both is either string)
// "4" - 1  --> both * , -, and / both convert both sides to number first
// only + is a special case which is use for concatenating


"8" | "1"; // 9

var x = NaN;
x === NaN; // false

isNaN(NaN); // true
isNaN("foo") // true
isNaN(undefined); // true
isNaN({}); // true
isNaN({ valueOf: "foo" }); // true


var a = NaN
a !== a; // NaN is not equal to ANY value, including itself because it was already invalid you cannot compare two invalid

var b = "foo";
b !== b;


var c = undefined; c !== c; // equal to iself
var f = null; f === f // null is equal to itself
var d = {}; d !== d; // reference is not equal
var e = { valueOf: "foo" }; e !== e; // the same



// utilities for this 
function isReallyNaN(x) {
    return x !== x;
}



// Object can be coerced to primitives


// Symbol.toPrimitive
// .valueOf()
// .toString()

"the Math object: " + Math; // "the Math object: [object Math]" 
"the JSON object: " + JSON; // "the JSON object: [object JSON]"

Math.toString(); // "[object Math]" 
JSON.toString(); // "[object JSON]"

"J" + { to: function () { return "S"; } }; // this will be J[object Object]
"J" + { toString: function () { return "S"; } }; // JS

// also

10 * { valueOf: () => "10" } // since valueOf is being coerced and being override

// when we coerce  an object into primitive it search for this special types
// .valueOf() -> convert to number
// .toString() -> convert to string
// Symbol.toPrimitive --> this convert primitive either auto guesing for valueOf or toString


const guess = {
    [Symbol.toPrimitive](value) {
        if ((value) === 'string' || value === "default") {
            console.log('this is string');
            return "S" // a fixed internal protocol, not a customizable function call system
        }
        return 0
    }
}


// argument 

const guessFn = (input) => ({
    value : input,
    [Symbol.toPrimitive](hint) {
        return hint === "string" ? `${this.value} ` : this.value
    }
})

console.log(5 + guessFn("10"))
console.log(5 + guessFn(10))
