function getSum( a,b )
{
   //Good luck!
  let sum = 0;
//   Check to see if start and end points are equal
  if(a == b) {
    return a;
  }
//   Check to see which value is greater to decide which to start from
  if(a > b) {
//     Begin for loop with designated values and add them to sum
    for(let i = b; i <= a; i++) {
    sum += i;
   }
//     Return sum after the loop ends.
    return sum;
  } 
  
  else {
    for(let i = a; i <= b; i++) {
    sum += i;
   }
    return sum;
  }
}

console.log(getSum(2,5));