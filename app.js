var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string') {
    userName = userInput;
}
