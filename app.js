function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + " " + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedName = combine('one', 'two');
console.log(combinedName);
/* In this case we see that need input number and string and both answer is correct.
    So to add another datatype use | 'union' 'or' */ 
