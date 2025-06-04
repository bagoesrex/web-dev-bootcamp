var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//     return x * 2
// }
// const newNumber = numbers.map(double)

// var newNumbers = []
// numbers.forEach((x) => newNumbers.push(x))
// console.log(newNumbers)

// const newNumbers = numbers.map((x) => {
//     return x * 2
// })
// console.log(newNumbers)



//Filter - Create a new array by keeping the items that return true.
// let newNumbers = []
// numbers.filter((num) => {
//     if (num < 10) {
//         newNumbers.push(num)
//     }
// })



//Reduce - Accumulate a value by doing something to each item in an array.
// let newNumber = numbers.reduce((accumulator, currentNumber) => {
//     return accumulator + currentNumber
// })



//Find - find the first item that matches from an array.
// const newNumber = numbers.find((num) => {
//     return num > 10
// })



//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => {
//     return num > 0
// })

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser



// console.log(newNumber)
// console.log(newNumbers)


import emojipedia from "./emojipedia";

const newEmojiPedia = emojipedia.map((emojiEntry) => {
    return emojiEntry.meaning.substring(0, 10)
})

console.log(newEmojiPedia)