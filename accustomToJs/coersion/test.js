// const result = 1 + "2" + 3 * "4" - "5";


// Q1
// Final value
// Final type
// Step-by-step evaluation (this is the important part)

// Ans

// final value is 1207, it was 1 + "2" = "12", then 3 * "4" = 12,  "12" + 12 = "1212"-5 = 1207



// Q2

// const result = 10 + {
//   valueOf() { return 5; },
//   toString() { return "20"; }
// };


// Ans 

// final value is integer 15. method is valueOf, this is object coersion, when object had a number methods 
// this overide the implicit coersion happening in 10+ {} thne it will return 5 so 10 + 5 


// JS tries to convert the object to a primitive with "default" hint
// Order is:
// Symbol.toPrimitive (if exists)
// valueOf()
// toString()

// Since valueOf() returns a primitive (5) → it stops there.





// Q3 

// const obj = {
//   valueOf() { return {}; },
//   toString() { return "7"; }
// };

// const result = 10 + obj;


// Final value
// Which method(s) are called (order matters now)
// Why valueOf is NOT enough here


// final value is "17", it first check the valueOf, sicne it returns an
//  {} which is object this can be selected in the toPrimitive symbol but just return object ,so we try again to toString(),
//  here since this is + that cna be use for concatenation or character coersion, this return 7





// Q5 

// const obj = {
//   [Symbol.toPrimitive](hint) {
//     if (hint === "number") return 10;
//     if (hint === "string") return "20";
//     return "30";
//   }
// };

// const result = obj + 5;




// ANS

// the final value is "305", string , it first got the + 5, so before going to object symbol to.Primitive,
//  is should take the + implicit coersion, and it saw 5, here 
// the hint value is "default", and it does not follow the two conditions created, which is number and stirng




// Q6

x = {
  value: 1,
  valueOf() {
    return this.value++; // post inrement, this return the 1 first then after that this will become 2
  }
};

const result = (x == 1 && x == 2 && x == 3); // true
// console.log(result);



// Q7 


// const result = [] == ![];
/*
-- ![] -> false
-- [] == false
-- [] == 0
-- [].toString() == 0;
-- "" == 0;
-- 0 == 0
-- true



*/


// const result = [1, 2] + [3, 4] --> "1,23,4"

