

const objs = {
    name : "John Moises",
    greet : function () {
        return "Good morning " + this.name;
    }
}

const objs2 = {
    name : "John Rick",
    greet : objs.greet // 'this' looks at calls reciever 
}

// console.log(objs2.greet());

// Constructor function 

function person(name, age) {
    // return "Hello" + this.name;
    this.name = name;
    this.age = age
}


// const p = new person("John Smith", 20);
// console.log(p.name);
// console.log(Person.prototype);
// console.log(Person.prototype.newVal = "nah id win");

// Person.prototype.sayHi = () => "Hello "
// const p = new Person("John Smith", 20);
// console.log(p.sayHi() + p.name);


// console.log(Person.prototype);


// console.log("object proto :::", Object.__proto__);

// console.log(typeof Function.__proto__);
// console.log(typeof Object); // this is function until you use 'new'

// The real root of instances is Object.prototype
// The real root of functions is Function.prototype

// Object
// Object.__proto__ → Function.prototype
// Function.prototype → Object.prototype
// Object.prototype → null


// “Object is itself a function, and all functions inherit from Function.prototype”

// Object (function)
//   ↓ __proto__

// console.log(typeof Object.__proto__); // function
// // Function.prototype
// //   ↓ __proto__

// console.log(typeof Function.prototype.__proto__); // object
// // Object.prototype
// //   ↓ __proto__

// console.log(typeof Object.prototype.__proto__) // object
// // null


// console.log(Object.__proto__.Function.prototype.__proto__.Object.prototype.__proto__);

let chain = Object; // traversal chain of prototype
let index= 0;
while (chain) {
    console.log(chain, 'index ::', index);
    chain = Object.getPrototypeOf(chain);
    index++
}


// Internals 
function New() {
    
var obj = {}
obj.__proto__ = Person.prototype;
console.log('Fist object :: ', obj);

var result = Person.call(obj, "John Smith", 20); // this populate in the person call, by this.name or this.age;

return (typeof result === "object" && result !== null) ? result : obj;
}

// console.log(New())

// “new creates an object, 
// links it to Person.prototype,
//  then calls Person with that object as this, and returns it.”


function NewFN(obj, ...arg){
    obj.name = arg[0]; // suppose that this is name 
}

// what is the difference between NewFN(obj, ...arg) and NewFN.call 
// first is NewFN(obj, ...arg) just pass the reference for mutiation, 
// NewFN.call(this,) use that object as that function context



// function test() 
// {
//     console.log("test");
// }

// console.log(test.__proto__);
// console.log(test.prototype.__proto__);



// Function.prototype === Object.__proto__ // true



// Function.prototype ---> [Function (anonymous)] Object


// Function.prototype.__proto__ --> [Object: null prototype] {}
// Function.__proto__ ---> [Function (anonymous)] Object



// Object.prototype --->  [Object: null prototype] {}



// Object.prototype.__proto__ -- > null;
// Object.__proto__ ---> [Function (anonymous)] Object





// console.log("Object.prototype -- ", Function.prototype.__proto__); // [Object: null prototype] {}
console.log('Object.__proto__ --', Object.__proto__); // [Function (anonymous)] Object



// Function Side 


// Function.__proto__ -->   Function.prototype
// Function.prototype.__proto__ -->  Object.prototype   
// Object.prototype.__proto__ ---> null



// Object Side

// Object.__proto__ --> Function.prototype
// Function.prototype.__proto__ --> Object.prototype
// Object.prototype.__proto__ --> null


// obj.__proto__ --> Prototype chain (actual inheritance)

// function A() {}
// A.prototype -- > Constructor system (blueprints)

// obj.__proto__ = A.prototype

