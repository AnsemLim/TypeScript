function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { //number, number, function that takes a number and returns nothing
    const result = n1 + n2;
    cb(result); //call function
}

printResult(add(5, 12));

let combineValues: (a:number, b:number) => number;

combineValues = add;// store function in variable

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => { //function that takes a number and returns nothing
    console.log(result);
});


























































































































































