const user = {
    username: "meet",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);          // in browser global object is window object but here it is empty object


// function chai() {
//     let username = 'meet'
//     console.log(this.username);
// }

// chai()


// const chai = function() {
//     let username = 'meet'
//     console.log(this.username);
// }

const chai = () => {
    let username = 'meet'
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "meet"})

console.log(addTwo(3, 4));
