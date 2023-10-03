function add(n1: number,n2: number, showResult: boolean, phrase: string){ // parameter type declaration
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result); //if the there is string with number, number will be auto convert to string
    }else{
        return n1+n2;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1 ,number2 ,printResult, resultPhrase);