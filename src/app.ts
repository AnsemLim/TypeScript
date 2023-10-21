let age = 30;
if (age > 20) {
    let isOld = true;
    console.log(isOld); 
}
// console.log(isOld); error

//arrow function
//const add = () => {};
//const add = (a: number, b: number) => a + b;// single return
const add = (a: number, b: number = 2 ) => { // default value
    return a + b;
} // return type

const printOutput: (a: number | string ) => void = output => console.log(output);
const button = document.querySelector("button"); 

if (button) {
    button.addEventListener("click", event => console.log(event));
}

printOutput(add(5));

//create a spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

hobbies.push(...activeHobbies);
console.log(hobbies); // ["Sports", "Cooking", "Hiking"]

//Make a copy of an array
const copiedArray = [...hobbies];