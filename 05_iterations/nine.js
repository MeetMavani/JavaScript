const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce( (acc,curval) => acc + curval, 0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce( (acc, curval) => acc + curval.price, 0)

console.log(priceToPay);

