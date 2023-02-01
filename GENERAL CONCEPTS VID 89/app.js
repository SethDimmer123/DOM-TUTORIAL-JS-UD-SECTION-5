// similar to css

// Select the element or group of elements that i want to affect.

//Decide the effect i want to aaply to the selection.

//There are many different ways 

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';


// assign to a variable

const element = document.getElementById('element');
// do something
// i get an element that is name element by the html id tag

document.querySelector('element'); //do something;


// window object
// console.log(window);

// returns a node object or a node list, which isan
// arraylike object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn); // this tell me i have access to the vutton html element by putting it in a VARIABLE
console.log(name);// THE NODENAME LETS ME KNOW WHAT I HAVE SELECTED IN THIS case it is a BUTTON
console.log(css); // ON MY NODE OBJECT i have a PROPERTY of STYLE line 31
//  when i console log btn.style it shows me ALL OF THE CSS PROPERTIES
// THAT I CSN SETUP ON THE BUTTON


// ITERATING THE MAIN IDEA

// I WILL ALWAYS WILL SELECT SOME KIND OF ELEMENT OR GROUP OF ELEMENTS
// THEN DECIDE WHAT AFFECTS I WANT TO APPLY TO THE PARTICULAR ELEMENT OR OTHER 
// ELEMENTS IN THE DOCUMENT.