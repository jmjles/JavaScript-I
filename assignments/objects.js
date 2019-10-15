// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F
console.log('########## Objects ##########');
// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const people={
  'Mitzi':{
    id:0,
    name:'Mitzi',
    email:'mmelloy0@psu.edu',
    gender: 'F'
  },
  'Kennan':{
    id:1,
    name:'Kennan',
    email:'kdiben1@tinypic.com',
    gender: 'M'
  },
  'Keven':{
    id:2,
    name:'Keven',
    email:'kmummery2@wikimedia.org',
    gender: 'M'
  },
  'Gannie':{
    id:3,
    name:'Gannie',
    email:'gmartinson3@illinois.edu',
    gender: 'M'
  },
  'Antonietta':{
    id:4,
    name:'Antonietta',
    email:'adaine5@samsung.com',
    gender: 'F'
  }
}
document.getElementById('oChallenge1').innerHTML = JSON.stringify(people, null, "\t");
console.log(JSON.stringify(people,null,"\t"))

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
let mitziName = people.Mitzi.name;

let msgMitzi = `Mitzi's name is ${mitziName}`
document.getElementById('oChallenge2').innerHTML = msgMitzi;
console.log(msgMitzi);

// Kennan's ID
let kenId = people.Kennan.id;
let msgKen = `Kennan's id is ${kenId}`;
document.getElementById('oChallenge2').innerHTML = document.getElementById('oChallenge2').innerHTML + '<br/>' + msgKen;
console.log(msgKen);

// Keven's email
let kevenEmail = people.Keven.email;
let msgKev = `Kevens' email is ${kevenEmail}`;
document.getElementById('oChallenge2').innerHTML = document.getElementById('oChallenge2').innerHTML + '<br/>' + msgKev;
console.log(msgKev);

// Gannie's name
let GanName = people.Gannie.name;
let msgGan = `Gannies' name is ${GanName}`;
document.getElementById('oChallenge2').innerHTML = document.getElementById('oChallenge2').innerHTML + '<br/>' + msgGan;
console.log(msgGan);

// Antonietta's Gender
let antGender = people.Antonietta.gender;
let msgAnt = `Antonietta's gender is ${antGender}`;
document.getElementById('oChallenge2').innerHTML = document.getElementById('oChallenge2').innerHTML + '<br/>' + msgAnt;
console.log(msgAnt);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
const hi = (name) => `Hello, my name is ${name}!`
let doc = document.getElementById('oChallenge3')
doc.innerHTML = hi('Kennan')
console.log(hi('Kennan'));

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
const multi = (a,b) => a * b;
const multiMsg = `Antonietta multiplied 2 and 6 which is ${multi(2,6)}`
doc.innerHTML = doc.innerHTML + '<br/>' + multiMsg
console.log(multiMsg)
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
let docStretch = document.getElementById('sChallenge')
const parent = {
  name:'Susan',
  age:70,
  speak:function(){ return `My name is ${this.name}. It's nice to meet you!`},
  'child':{
    name:'George',
    age:50,
    speak:function(){ return `My name is ${this.name}. It's nice to meet you!`},
    'grandchild':{
      name:'Sam',
      age:30,
      speak:function(){ return `My name is ${this.name}. It's nice to meet you!`}
    }
  }
}
// Log the parent object's name
console.log(parent.name)
docStretch.innerHTML = `Parent's name: ${parent.name}` + '<br/>';

// Log the child's age
console.log(parent.child.age)
docStretch.innerHTML = docStretch.innerHTML + `Child's age: ${parent.child.age}` + '<br/>'

// Log the name and age of the grandchild

console.log(parent.child.grandchild.name)
console.log(parent.child.grandchild.age)
docStretch.innerHTML = docStretch.innerHTML + `Grandchild's name: ${parent.child.grandchild.name}` + '<br/>'
docStretch.innerHTML = docStretch.innerHTML + `Grandchild's age: ${parent.child.grandchild.age}` + '<br/>'

// Have the parent speak

console.log(parent.speak());
docStretch.innerHTML = docStretch.innerHTML + `Parent says: "${parent.speak()}"` + '<br/>'
// Have the child speak

console.log(parent.child.speak());
docStretch.innerHTML = docStretch.innerHTML + `Child says: "${parent.child.speak()}"` + '<br/>'

// Have the grandchild speak

console.log(parent.child.grandchild.speak());
docStretch.innerHTML = docStretch.innerHTML + `Grandchild says: "${parent.child.grandchild.speak()}"` + '<br/>'
