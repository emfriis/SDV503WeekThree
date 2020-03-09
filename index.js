let numFirst = 2;
let numSecond = 4;
let stringNumFirst = '6';

let numExp = numFirst ** numSecond;
console.log(numExp);

console.log('numSecond before Increment Operator x++:');
console.log(numSecond);
console.log('numFirst before Increment Operator ++x:');
console.log(numFirst);
numSecond = ++numFirst;
console.log('Pre-Increment for numFirst:');
console.log(numFirst);
console.log('Pre-Increment for numSecond:');
console.log(numSecond);

console.log('numSecond before Increment Operator x++:');
console.log(numSecond);
console.log('numFirst before Increment Operator x++:');
console.log(numFirst);
numFirst = numSecond++;
console.log('Post-Increment for numFirst:');
console.log(numFirst);
console.log('Post-Increment for numSecond:');
console.log(numSecond);

let numAsString = numFirst + stringNumFirst
console.log("Evaluation of numeric value 3 + string value '6':");
console.log(numAsString);
console.log("Numeric value 3 plus String value '6' evaluates to a concatenated string with the value '36'");

let stringNumSecond = '10';
let stringNumThird = '12';

let stringsToNums = +stringNumSecond + +stringNumThird;
console.log("Evaluation of string '10' plus '12' converted to number values:");
console.log(stringsToNums);
console.log("Evaluates to result of numeral operator with strings converted to numeric values");