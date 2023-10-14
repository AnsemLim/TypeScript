let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string') { 
  userName = userInput;
}

function generationError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generationError('An Error Occurred!', 500); // Error: An Error Occurred!