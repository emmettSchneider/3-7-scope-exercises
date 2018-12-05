// C is for Cookie

// ORIGINAL CODE
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// NEW CODE
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Comment about the code above: In the original example in the comments above the code, the loop was pulling y from the global scope. While it wasn't clear from the instructions what was in bounds and out of bounds, I fixed the infinite loop by changing 'y' to 'x' in the for loop, which was previously pulling from the global y and not reiterating, and setting x to 0 to pull "Oatmeal Raisin". I know a lot of people don't care for Oatmeal Raisin, but it shouldn't be left out regardless.

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

console.log(y)

// Comment about the code above: It also works to change x to y. Because y is lexically scoped to the function, it will use 'y = 0' from the function and not 'y = 1' from the global scope. The global scope 'console.log(y)' after the function will return '1' from the original global let declaration.


// Conjunction Function

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    console.log(conjoinedWord);
}

conjunction("Master", "Card")

// Comment about the code above: console.log needed to be moved into the conjunction function's brackets to access conjoinedWord, which was not defined globally. The console now logs 'Master Card'.


// Mod Squad (TO BE COMPLETED)

// {
//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// document.querySelector(".show-info").innerHTML = HTMLRepresentation


// Simon Says
// There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)


// Advanced Challenge: Lambda Llama

// Not only can functions take other functions as arguments, but functions can also return functions! This is marked as an advanced challenge because you haven't been introduced to this concept yet.

// The llamaNamer function defines an internal function and your job is to rewrite this code so that the internal function gets returned.

// Remember, come to the staff and ask questions if you decide to take this one on and get stuck.

// const llamaNamer = function () {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 7)

//     const namer = function () {
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//     }

//     return name + suffix
// }

// nameMaker = llamaNamer()
// console.log(nameMaker())