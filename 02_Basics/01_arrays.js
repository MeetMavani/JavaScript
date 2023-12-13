// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "Ram", "Hanuman", "Ganesha"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);
// console.log(typeof myArr);

// Javascript copy operations create shallow copies rather then deep copies
// Shallow copy: A shallow copy of an object is a copy whose properties share the same references
// Deep copy: A deep copy of an object is a copy whose properties do not share the same references


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)     // add elem in the 0th index
// myArr.shift()   // removes ..................

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);