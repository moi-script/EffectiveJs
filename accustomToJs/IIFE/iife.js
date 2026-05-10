function wrapElements(a) {
    var result = [], i,  n; // var create same reference, 
    for ( i = 0, n = a.length; i < n; i++) {  // each loop here the value of i is the same so 
        // if we put it, the value that function is pointing to is also the same type 
        (function (j) {
            result[j] = function () {
                console.log('I value --> ', i); // 6 
                console.log('J value --> ', j);
                return a[j]; // we can use the iife to stay a reference 
            };
        })(i)
    }

    return result;
}


// function {
//   code: return a[i]
//   [[Environment]] → reference to outer environment
// }


const res = wrapElements([10, 20, 30, 40, 50, 60]);
// const fn = res[1];


// for(const fns of res) {
    
//     console.log(fns());
// }


