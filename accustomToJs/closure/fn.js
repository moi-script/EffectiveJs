



// meaning we can initialize previous value and use that into different call 
function lateCall(n) {
    let result = 0;
    return function () {
        result  += (n *  10) 
        return result;
    }
}
// let newVal = lateCall(10);
// console.log(newVal());
// console.log(newVal());
// console.log(newVal());
// console.log(newVal());



// we can create get and set for this 



function defineCall() {
    let value = undefined;

    return {
        set : (v) => value = v,
        get : () => console.log(value),
        type : () => console.log(typeof value), 
    }
}

const s = defineCall();

// s.set(100);
// s.get(100);
// s.type(100);





// How does this closure possible

// this works because function remember variables from its outer scope even after outer execution is done

// lexical scope -> defined at write time not run time
// execution context does not destror needed variables
// it does not delete the variables from call stack because it still reference to that inner, so it was keep in memory

// inner ---> reference ---> { x: 10 }
// this inner is still alive even after the outer function is gone that's why it keep variables  





function useState(value) {
    let v = value;

    function setValue(newvalue) {
        v = newvalue;
    }
    function getV() {
        return v;
    }

    return [getV, setValue];
}

const [value, setValue] = useState(null); 

console.log('first value :: ', value());

setValue(100);
console.log('second value :: ', value()); // this is different compare to react with just
// value call
// because react does not use setValue use mutate state, 
// it schedule re - render part that time we use setValue, it restart also allowing the new value of initial state 
// to follow 

