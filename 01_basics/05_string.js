const name =" pritam"
const repoCount =50;

// console.log(name +repoCount)+"Value";

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('pritam');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne ="   Patil  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://pritampatil.com/pritam%20patil";

console.log(url.replace('%20','_'))
console.log(url.includes('the'));

console.log(gameName.split('-'));


















