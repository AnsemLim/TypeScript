function combine(input1, input2, resultConversion) {
    var result;
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
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // +input1 convert string to number
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedName = combine('one', 'two', 'as-string');
console.log(combinedName);
/* In this case we see that need input number and string and both answer is correct.
    So to add another datatype use | 'union' 'or' */ 
