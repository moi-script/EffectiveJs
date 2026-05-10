
// this wont work in strict mode by default lol hahahahhahahha

function hoist(v) {
    if(v === 10) {
        let x = 100;
    }
    console.log(x);
}

hoist(10);