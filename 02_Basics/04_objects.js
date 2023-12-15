// const instauser = new Object()          // Singleton object
const instaUser = {}                    // Non Singleton object

// console.log(instaUser);                 // Same output
// console.log(instauser);                 // for both


instaUser.id = "123"
instaUser.name = "Sven"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "xyz@email.com",
    fullname: {
        firstname: "Meet",
        lastname: "Mavani"
    }
}

// console.log(regularUser.fullname.firstname);   // ? after fullname

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign( {}, obj1, obj2)     // {} is an empty target object in which the all objects will rside
const obj3 ={...obj1, ...obj2};                 // spread operator // simpler // latest // more used

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "mm@gmail.com"
    },
    {
        id: 1,
        email: "mm@gmail.com"
    },
    {
        id: 1,
        email: "mm@gmail.com"
    }
]

users[1].id

// console.log(instaUser);

// console.log(Object.keys(instaUser));        // return array of keys
// console.log(Object.values(instaUser));      // return array of values
// console.log(Object.entries(instaUser));     // return array of arrays of all key:val paris


// console.log(instaUser.hasOwnProperty('isLoggedIn'));
// console.log(instaUser.hasOwnProperty('isLogged'));



// Deconstruct objects

const course = {
    coursename: "JS",
    price: 0,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
// console.log(course["courseInstructor"])

const {courseInstructor} = course
const {courseInstructor: a} = course

// console.log(courseInstructor);
console.log(a);



// JSON

// {
//     "name": " meet ",
//     "coursename": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

