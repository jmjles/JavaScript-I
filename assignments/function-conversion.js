// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
console.log('########## Functions ##########');
let myFunction = () => console.log("Function was invoked!");
myFunction();

document.getElementById('fChallenge1').innerHTML = `let myFunction = () => console.log("Function was invoked!");`;

let anotherFunction = (param) => console.log(param);
anotherFunction("Example");

document.getElementById('fChallenge2').innerHTML = `let anotherFunction = (param) => console.log(param);`;

let add = (param1, param2) => console.log(param1 + param2);
add(1,2);

document.getElementById('fChallenge3').innerHTML = `let add = (param1, param2) => console.log(param1 + param2);`;

let subtract =(param1, param2) => console.log(param1 - param2);
subtract(1,2);

document.getElementById('fChallenge4').innerHTML = `let subtract =(param1, param2) => console.log(param1 - param2);`;

// Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map((num) => num * 3);
console.log(triple);

document.getElementById('sChallenge2').innerHTML = `const triple = exampleArray.map((num) => num * 3);`;