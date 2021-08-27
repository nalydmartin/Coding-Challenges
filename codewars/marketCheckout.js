function queueTime(customers, n) {

    // Check to see if n is <= to 0; make it 1 if true; make it the passed in val if false
    // Fill the array with the amount of zeroes == to the passed in val; 
    let numOfTills = Array(n <= 0 ? 1 : n).fill(0);

    // Start a loop through the array of customers
    // The loop will process each index of the customers array at a time
    customers.forEach(customer => {

        // Find the fastest line by searching the tills array from the starting index and using Math.min to grab the smallest value in the array
        const fastest = numOfTills.indexOf(Math.min(...numOfTills));

        // Using fastest with the current smallest val in the array; 
        // Grab the index in tills and add the value of customer to it
        numOfTills[fastest] += customer;
    });

    // Once the loop is finished; there should be 1 queue time larger than the other/others;
    // Use Math.max to find the largest queue time in the array
    return Math.max(...numOfTills);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Test for failure cases
// 1) If the customers param is not an array
// 2) If the customers param is an array containing non-integers
// 3) If the tillCount param is not an integer

// describe("example tests", () => {
//     it("Should throw if invalid inputs provided", () => {
//       expect(() => queueTime(1, 1)).toThrow(/InvalidArgumentException/);
//       expect(() => queueTime(["test", 2, null], 1)).toThrow(/InvalidArgumentException/);
//       expect(() => queueTime([], null)).toThrow(/InvalidArgumentException/);
//     });

//     it("Should have no queue time if no customers are in line", () => {
//       expect(queueTime([], 1)).toBe(0);
//     });

//     it("Should calculate the correct queue time for valid customers", () => {
//       expect(queueTime([5,3,4], 0)).toBe(12);
//       expect(queueTime([1,2,3,4], 1)).toBe(10);
//       expect(queueTime([2,2,3,3,4,4], 2)).toBe(9);
//       expect(queueTime([1,2,3,4,5], 100)).toBe(5);
//     });
//   });
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function queueTime(customers, tillCount) {
//     if(!Array.isArray(customers)) {
//         throw new Error(`InvalidArgumentException: Parameter 1 must be an array, received: ${typeof customers}`);
//     } else if(!customers.every(time => Number.isInteger(time))) {
//         throw new Error(`InvalidArgumentException: Parameter 1 must be an array of integers. At least one element in the array does not conform to this, received: ${customers}`);
//     } else if(!Number.isInteger(tillCount)) {
//         throw new Error(`InvalidArgumentException: Parameter 2 must be an integer, received: ${typeof tillCount}`);
//     }

//     // Check to see if tillCount is <= to 0; make it 1 if true; make it the passed in val if false
//     // Fill the array with the amount of zeroes == to the passed in val; 
//     let tills = Array(tillCount <= 0 ? 1 : tillCount).fill(0);
//     // Start a loop through the array of customers
//     // The loop will process each index of the customers array at a time
//     customers.forEach(customer => {
//         // Find the fastest line by searching the tills array from the starting index and using Math.min to grab the smallest value in the array
//         const fastest = tills.indexOf(Math.min(...tills));
//         // Using fastest with the current smallest val in the array; 
//         // Grab the index in tills and add the value of customer to it
//         tills[fastest] += customer;
//     });
//     // Once the loop is finished; there should be 1 queue time larger than the other/others;
//     // Use Math.max to find the largest queue time in the array
//     return Math.max(...tills);
// }
// queueTime([5,3,4], 0)