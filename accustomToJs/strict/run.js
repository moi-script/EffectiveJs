// Node reads the file
// Wraps it like this (simplified):
// (function (exports, require, module, __filename, __dirname) {
//   // your code here
// });
// Parses the code
// Compiles it (V8 engine)
// Executes it




// Bundling --> taking many files and turning then into one file -> uses for browser, it needs a single request
// for faster performance http

// file1.js before bundling js
export function a() {}

// file2.js 
import { a } from './file1.js';
a();

//after bundling

// bundle.js

function a() {}

a();




// Execution flow 

// File → Source Code → Parser → AST → Compiler → Bytecode → Execution (V8)


// node app.js
// "function f() { return 1 }" -> combine to string

// Parse using AST -> Abstract Syntax Tree
// FunctionDeclaration
//  ├── name: f
//  └── body:
//       ReturnStatement
//         └── Literal: 1


// Then Convert to bytecode 
// LoadConstant 1
// Return
// This is handled by V8’s interpreter called Ignition.

// Execution 
// creates a call stack
// creates execution context
// allocates memory

// Variable environment
// Scope chain
// this binding


// Function Execution model
function f() {
  var x = 1;
} // testing if this will run 
// register f
// allocate memory 

// Execution phase
// push stack frame
// run instructions


// If this function run many times 
// this will use TurboFan
// Bytecode → Optimized Machine Code

function add(a, b) {
  return a + b;
}

// compiled into actual CPU instructions


// The real one if multiple files 

// Multiple files
//    ↓
// Bundler (merge + transform)
//    ↓
// Single JS file
//    ↓
// V8 Parser → AST → Bytecode → Execution