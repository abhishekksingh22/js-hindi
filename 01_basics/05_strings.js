const name = "sintu";
const repoCount = 50;

console.log(name + repoCount + " Value "); // Output: sintu50 Value

const gameName = new String('sintu-pc');

console.log(gameName.length);       // Output: 7
console.log(gameName.charAt(4));    // Output: u
console.log(gameName.indexOf('u'));

const newString=gameName.substring(0,5)
console.log(newString);

const anotherString=gameName.slice(0,4)
console.log(anotherString);

const newStringOne="  sintu    " //extra space
console.log(newStringOne);

console.log(newStringOne.trim());


