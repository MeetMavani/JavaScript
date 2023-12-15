
// var c = 300             // Global Scope  out of {}

let a = 300

if (true) {             // blog Scope inside {}
    let a = 10
    const b = 20
    // c = 30
    // console.log("INNER: ",a);         
}


// console.log(a);
// console.log(b);
// console.log(c);         // output 30


function one() {
    const username = "meet"

    function two(){
        const website = "GitHub"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "meet"
    if (username === "meet") {
        const website = " GitHub"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

// hoisting

addone(5)
function addone(num) {
    return num + 1
}



addtwo(5)
const addtwo = function(num){
    return num + 2
}

