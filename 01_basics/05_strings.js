const name = "Amol"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('amol-ah-abcd')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));
console.log(gameName.toLowerCase());

const newString = gameName.substring(-2,5)
console.log(newString);

const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "     Amol1    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amol.com/amol%20aher"
console.log(url.replace('%20','-'))

console.log(url.includes('aher'));

console.log(gameName.split('-'));



