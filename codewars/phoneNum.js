function createPhoneNumber(numbers){
    let phoneNum = "";
  
    for (let i = 0; i < numbers.length; i++) {
      
      if (i == 0 ) {
        phoneNum = phoneNum.concat("(", numbers[i]);
  
      } else if(i <= 2) {
        phoneNum = phoneNum.concat(numbers[i]);
  
      } else if (i == 3) {
        phoneNum = phoneNum.concat(")", " ", numbers[i]);
  
      } else if (i <= 5) {
        phoneNum = phoneNum.concat(numbers[i]);
  
      } else if (i == 6) {
        phoneNum = phoneNum.concat("-", numbers[i]);
  
      } else if (i < numbers.length) {
        phoneNum = phoneNum.concat(numbers[i]);
      }
      
    }
    
    return phoneNum;
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));