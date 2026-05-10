var constructor = function () { return null; };
var f = function f() {
    return constructor();
};

console.log(f()) // before like S3 environment, this wil be an {}, 
// because the named function expression inherits Object.prototype.constructor


// fix 

// A named function expression creates its own inner lexical 
// environment where the function name is bound, and that binding does not interfere with outer variables.

// Outer Environment:
//   constructor → your function

// Inner Environment (inside f):
//   f → function itself