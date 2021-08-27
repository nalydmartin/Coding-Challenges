function expandedForm(num) {

    //   Grab the first number, count how many digits come after it
    //   Move to the following number and count the digits after and so forth
    
    let expandedStr = "";
    let digits = 0;
    
    for(let i = 0; i < String(num); i++) {

        expandedStr.concat(num[i])

    }
    
    return expandedStr;
}
    
console.log(expandedForm(250));