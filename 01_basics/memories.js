//Stack (primitive), Heap (Non-Primitive) (referecnce value milta hai)

let myYoutubename = "amolyoutube.com"
let anothername = myYoutubename

anothername = "chaiaurcoffee"

console.log(myYoutubename);
console.log(anothername);

let userOne = { 
    email : "user@google.com",
    upi : "user@upi"
}
let userTwo = userOne

userTwo.email = "Amol@amol.com"

console.log(userOne.email);
console.log(userTwo.email);
