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
    // let result = number1 + number2
    // return result                               // as per func definition rule log is unreachable
    // console.log("Meet");                        //  as it is after return statement      
    return number1 + number2
}


const result = addTwoNumbers(3,5)
// console.log("Result:", result);                     // undefined as function not returning anything


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return  `${username} just logged in`
}

// console.log(loginUserMessage("meet"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){           // rest operator    
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "meet",
    price: 199
}

function handleObject(anyobject){
    console.log( `Username is ${anyobject.username} and price is ${anyobject["price"]}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 500, 600]));
