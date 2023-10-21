let age = 30;
if (age > 20) {
    let isOld = true;
    console.log(isOld); 
}
// console.log(isOld); error

//arrow function
//const add = () => {};
//const add = (a: number, b: number) => a + b;// single return
const add = (a: number, b: number) => {
    return a + b;
} // return type

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", event => console.log(event));
}