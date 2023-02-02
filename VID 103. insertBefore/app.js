// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// appendchild is not the only method that i can use when i want to insert
// an element dynamically.

// but i still need to use createElement and createTextNode

// insertBefore('element','location');

// instead of appendchild i will be using insertBefore('element','location')

// insertBefore method REQUIRES 2 ARGUEMENTS 

// 1. one is what kind of element do i want to insert
// 2. the second one is the location where exactly do i want to insert

// so BEFORE which element would i like to insert before my dynamic element

const result = document.querySelector('#result');
const first = document.querySelector('.red');
// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text); // i have added text to my body div
document.body.insertBefore(bodyDiv,result);
// result element



const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first); // this now puts the dynamic heading BEFORE THE result red heading
// that was already in my html.

console.log(result.children);