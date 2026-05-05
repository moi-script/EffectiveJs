// All of what happened here is doubles

// Up to (-2^53) | (2^53)

// 0.1 * 1.9 
// 0.19 -99 + 100; 
// 1 21 - 12.3; 
// 8.7 2.5 / 5; 
// 0.5 21 % 8;
// 5



// However using 8 | 1 (bitwise OR)

// this makes the integer 32-bit -> treated as big endian



console.log((8).toString(2)) // 1000 instead of 00000000000000000000000000001000

console.log(parseInt("1001", 2)) // 9


// Inaccuracy issue
// (0.1 + 0.2) + 0.3; // 0.6000000000000001 
// 0.1 + (0.2 + 0.3); // 0.6




// equality check --	epsilon comparison
// money	 -- integer scaling (cents)
// UI display --	toFixed()
// long calculations --	rounding steps
// scientific/finance --	big decimal libs


// console.log((0.1 + 0.2) + 0.3 !== 0.6); // wrong

// we should compare with tolerance 

function equals(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
// comparisons
// checks
// UI logic

// what is epsilon?

// console.log(equals((0.1 + 0.2) + 0.3, 0.6))




function scaleIntAdd(normalize, ...args) { // we need the normalizer since we cannot rely on auto length detection 
    const params = [...args];

    return params.reduce((accumulator, currentVal ) => {

        accumulator = accumulator * normalize;
        currentVal = currentVal * normalize; // multiplied to the maximum number possible in floating point

        return (accumulator + currentVal) / normalize;
    })
}


// function scaleIntAdd(scale, ...args) {
//     return args
//         .map(n => Math.round(n * scale))
//         .reduce((a, b) => a + b, 0) / scale;
// }

console.log('Scale int --> ', scaleIntAdd(0.2, 0.4, 0.45))


// Rounding function 

function round(n, decimal = 10) {
    return Number(n.toFixed(decimal));
} 

// console.log(Math.round(0.2 + 0.3));


// 
function scaleTest(scale, ...args){
    return [...args].map(n => Math.round(n * scale)).reduce((a, b) => a + b,0) / scale;
}


console.log(scaleTest(0.33, 0.45454, 0.9));