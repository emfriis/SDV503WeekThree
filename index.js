let numFirst = 2;
let numSecond = 4;
let stringNumFirst = '6';

let numExp = numFirst ** numSecond;
console.log(numExp);

console.log('numSecond before Increment Operator ++numFirst:');
console.log(numSecond);
console.log('numFirst before Increment Operator ++numFirst:');
console.log(numFirst);
numSecond = ++numFirst;
console.log('Pre-Increment for numFirst:');
console.log(numFirst);
console.log('Pre-Increment for numSecond:');
console.log(numSecond);

console.log('numSecond before Increment Operator numSecond++:');
console.log(numSecond);
console.log('numFirst before Increment Operator numSecond++:');
console.log(numFirst);
numFirst = numSecond++;
console.log('Post-Increment for numFirst:');
console.log(numFirst);
console.log('Post-Increment for numSecond:');
console.log(numSecond);

for (let i = 0; i <= 10; i++) {;
    console.log(i);
}; 

for (let i = 10; i >= 0; i--) {;
    console.log(i);
};

let numAsString = numFirst + stringNumFirst
console.log("Evaluation of numeric value 3 + string value '6':");
console.log(numAsString);
console.log("Numeric value 3 plus String value '6' evaluates to a concatenated string with the value '36'");

let stringNumSecond = '10';
let stringNumThird = '12';

let stringsToNums = +stringNumSecond + +stringNumThird;
console.log("Evaluation of string '10' plus '12' converted to number values:");
console.log(stringsToNums);

let numTrue = +(1 == 1);
console.log("Result of (1 == 1) converted to a numeric value.")
console.log(numTrue);

let numFalse = +(1 == 0);
console.log("Result of (1 == 0) converted to a numeric value.")
console.log(numFalse);

 console.log("Evaluation of (5 + 6, 2 * 3):");
 console.log(5 + 6, 2 * 3)