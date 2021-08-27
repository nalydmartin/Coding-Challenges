function solution(number){
    //   Start the sum at zero
      let sum = 0;
    //   Start the loop at zero and end it before the given number
      for(let i = 0; i < number; i++) {
        
    //     Start the checks from greatest to smallest e.g. check 3+5, then 5, then 3.
    //     Otherwise there will be complications with numbers divisible by both 3 + 5
    //     Check to see if i is divisible by 3 & 5 with no remainder
        if(i % 3 === 0 && i % 5 === 0) {
          sum+= i;
        } 
    //     Check to see if i is divisible by 5 with no remainder
        else if (i % 5 === 0) {
          sum += i;
        } 
    //     Check to see if i is divisible by 3 with no remainder
        else if (i % 3 === 0) {
          sum += i;
        }
      }
    //   Return sum after the loop ends and sum has been calculated
      return sum;
    }
    
    console.log(solution(10));