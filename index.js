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