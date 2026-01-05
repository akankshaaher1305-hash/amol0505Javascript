// Primitive
 // 7 types:  String, Number, Boolean, Null, Undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherid = Symbol('123')
 
 console.log(id === anotherid);

  const bigNumber = 3456545649848448489n


 
//Non-primitive 
//Reference(NOn-primitive)
// Array, Objects, Functions

const heros = ["Shaktiman","Naagraj","doga"]
let myobj = {
    name : "Amol",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherid);


