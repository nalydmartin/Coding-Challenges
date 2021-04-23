const foo = {
    a : 'foo',
    b : 'bar',
    c : null,
    d : undefined,
    e : 0,
    f : {
      a : 'fuz',
      b : null,
      c : {
        a : 'biz',
        b : 'buz',
        c : [
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0,
            f : false
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          },
          {
            a : 'foo',
            b : 'bar',
            c : null,
            d : undefined,
            e : 0
          }
        ]
      }
    }
  };
  
  /** ************************************
    Your challenge is to refactor the cleanse function so its return value is a 
    clone of its received object, absent all `null` and `undefined` values.
     - You can use Ramda.js or vanilla JavaScript to solve
     - You may not mutate foo
  
    Example:
    const foo = { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
    cleanse(foo); // { a : 1, b : 2, c : 0, d : false, g : 'hello' };
    foo remains unmutated // { a : 1, b : 2, c : 0, d : false, e : undefined, f : null, g : 'hello' };
   ************************************ **/

const cleanse = (obj) => {

  // Clone the given object and assign it to a temp variable
    const temp = Object.assign({}, obj);

    // Loop through the temp object 
    for(key in temp) {

        // First check to see if the key value is an object
        if (typeof temp[key] === "object") {

            // Loop in the nested object to extract key value pairs
            for(key2 in temp[key]) {

                //  Check to see if the nested key value is an object
                if(typeof temp[key][key2] === "object") {

                    // Iterate through the nested object using key3
                    for(key3 in temp[key][key2]) {
                        // console.log("this is from key3: ", temp[key][key2][key3])
                        console.log(typeof temp[key][key2][key3], temp[key][key2][key3])
                        if (typeof temp[key][key2][key3] === "object") {
                            // Create a var to hold the arr values
                            const tempArr = temp[key][key2][key3];
                            console.log("This is temp arr: ", tempArr)
                            // Map through each value in the array using the cleanseArray function
                            tempArr.map(cleanseArray);
                            console.log("Cleansed Array : ", tempArr)
                        }
                    }
                    console.log("Inside the object!....")
                }
                // If it's not an object check if it's null/undefined and delete it
                if (temp[key][key2] === null || temp[key][key2] === undefined) {
                    delete temp[key][key2];
                }
            }
        }
      // Check to see if the value at each key in temp is equal to null or undefined
      // If value is null/undefined remove the key-value pair from the object
        if (temp[key] === undefined || temp[key] === null) {

            delete temp[key];
        }
    }
    console.log("Final temp: ", temp)
    // Create a var to access the nested array and check to make sure null/undefined values are extracted
    let finalArray = temp.f.c.c;
    console.log("Final temp inner array: ", finalArray);
    return temp;
};

// CleanseArray takes in each object inside the array one at a a time
function cleanseArray(obj) {

    console.log("Inside cleanse array function")
    console.log("This is obj: ", obj)
    // Iterate through the object
    for (key in obj) {
        // Check to see if any of the key value pairs is null/undefined and delete it
        if (obj[key] === undefined || obj[key] === null) {
            delete obj[key];
        }
    }
    console.log("Obj after cleanse: ", obj);
    // Finally, return the cleansed object 
    return obj;
}

console.log("Solution: ", cleanse(foo));

console.log("This is foo after cleanse: ", foo)
console.log("This is foo's inner array after cleanse: ", foo.f.c.c)