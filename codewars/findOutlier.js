// Given an array with a minimum length of 3 containing integers, it will either contain all odd or even nums with 1 outlier. EX: [1,3,5,6] = 6; [-2,-4,-6,-7] = -7
// Find the outlier and return it.

const test1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const test2 = [160, 3, 1719, 19, 11, 13, -21];

function findOutlier(integers) {
  let even = [];
  let odd = [];

 if(integers.length < 3) {
   return "Array does not meet length requirements: " + integers;
 }

 for (i in integers) {
   if (integers[i] % 2 === 0) {
     even.push(integers[i]);
   } else if (integers[i] % 2 !== 0) {
     odd.push(integers[i]);
   }
 }

 if(even.length > odd.length) {
   return odd[0];
 } else {
   return even[0];
 }
}

console.log(findOutlier(test1));
console.log(findOutlier(test2));