type Combinable = number | string; // custom type/ alias/ union type
type ConversionDescriptor ='as-number' | 'as-text'
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
    ){ 
    let result;
    /* Option 1
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
    */
   /* Option 2 */
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; // +input1 convert string to number
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedName = combine('one', 'two', 'as-text');
console.log(combinedName);

/* In this case we see that need input number and string and both answer is correct. 
    So to add another datatype use | 'union' 'or' */