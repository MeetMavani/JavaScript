//definition / scope

function sayMyname() {
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("T");
}

sayMyname // reference
// sayMyname() //executuion

function addTwoNumbers(number1, number2){        // Parameters: number1 and number2
    console.log(number1 + number2);
}

// addTwoNumbers()
// addTwoNumbers(1,2)                            // Arguements: 1,2

// const result = addTwoNumbers(3,5)
// console.log("Result:", result);               // undefined as function not returning anything


function addTwoNumbers(number1, number2){        
    const result = number1 + number2
    return result                               // as per func definition rule log is unreachable
    console.log("Meet");                        //  as it is after return statement      
}


const result = addTwoNumbers(3,5)
console.log("Result:", result);                     // undefined as function not returning anything