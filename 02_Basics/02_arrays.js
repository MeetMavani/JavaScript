const marvel_heroes = ["thor", "ironman", "cap"]
const dc_heroes = ["superman", "batman", "wonderwoman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const universe = marvel_heroes.concat(dc_heroes);
// console.log(universe);

const new_universe = [...marvel_heroes, ...dc_heroes] // can concate more than two arrs
// console.log(new_universe);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // normally specify depth num i.e. 1 or 2 or etc
console.log(real_another_array);



console.log(Array.isArray("Meet"))
console.log(Array.from("Meet"))
console.log(Array.from({name: "Meet"})) // gives empty array [] coz 
// it is not specified whether to return an array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

