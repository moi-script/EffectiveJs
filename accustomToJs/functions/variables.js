
function values()  {
    var args = arguments; // without assigning the arguments here it cannot be use in nested function call
    
    let i = 0, n= args.length;


    return {
        hasNext : function() {
            return i < n;
        },
        next : function() {
            if(i >= n) {
                throw new Error('end of iteration');
            }
            return args[i++];
        }
    }
}

// iterable function 
const l = values(20, 1, 3, 50, 20, 20, 30);

console.log(l.next());