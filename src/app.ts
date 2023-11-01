// let age = 30;
// if (age > 20) {
//     let isOld = true;
//     console.log(isOld); 
// }
// console.log(isOld); error

//arrow function
//const add = () => {};
//const add = (a: number, b: number) => a + b;// single return
// const add = (a: number, b: number = 2 ) => { // default value
//     return a + b;
// } // return type

// const printOutput: (a: number | string ) => void = output => console.log(output);
// const button = document.querySelector("button"); 

// if (button) {
//     button.addEventListener("click", event => console.log(event));
// }

// printOutput(add(5));

//create a spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

hobbies.push(...activeHobbies);
console.log(hobbies); // ["Sports", "Cooking", "Hiking"]

//Make a copy of an array
const copiedArray = [...hobbies];

const person = {
    firstName: "Max",
    age: 30
};

const add = (...number: number[]) => { // rest operator number[] is an array which the add
    return number.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);

//array and object destructuring
// usually use in react
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);// ["Sports", "Cooking", "Hiking"] Sports Cooking

const { firstName, age } = person;

console.log(firstName, age); // Max 30