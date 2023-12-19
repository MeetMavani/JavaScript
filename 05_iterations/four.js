const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by ruby'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "java"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
map.set('IN',"India")

// for (const key in map) {
//     console.log(key);
// }