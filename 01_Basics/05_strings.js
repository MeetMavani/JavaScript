const name =  "meet"
const repoCount = 5

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("meet-MM-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const str1 = "    meet     "
console.log(str1);
console.log(str1.trim());

const url = "https:/meet.com/meet00mavani"

console.log(url.replace('00', '-'));

console.log(url.includes('more'));

console.log(gameName.split( "-",3));