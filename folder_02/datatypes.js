// Primitive 

// 7 types : String , Number , Boolean, null, undefined, symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const anotherId = nulll
// let userEmail;  // (;) likhte ho, to uski value automatically undefined hoti hai.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5466523445111n
// Reference (Non-Primitive)

// Array, Objects, Function

const heros = ["vivek " , "Aman", "Sagar"]  // ye array hai

const myDe = {
    name: "vivek",
    age: 22,
}
// culy bracket ke ander jo bhi hai wo object hai

// function ko declear karne ke kafi tarike hai 

const myFunction = function(){
    console.log(typeof myFunction);
}