// this is how you add elements dynamically.

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)


//  ONLY WHEN JAVASCRIPT RUNS THEN WE CREATE OUR DIV ELEMENT 
// THEN THE textNode
// then add the textnode to  body div
//then the body div gets append to the body element

const result = document.querySelector('#result'); // parent of appendChild

// create empty element

const bodyDiv = document.createElement('div');
// // create text node
const text = document.createTextNode('a simple body div');// the text on the browser page
bodyDiv.appendChild(text); //what kind of element do i want to add to my body div?
document.body.appendChild(bodyDiv);




const heading = document.createElement('h2'); // we created a h2 element
const headingText = document.createTextNode('dynamic heading');  // i created a textNode 
// called dynamic heading which the same thing as a text string.
heading.appendChild(headingText); // child of div id="result"
heading.classList.add('blue');

result.appendChild(heading); // child of div id="result"

console.log(result.children); // the .children property returns the children 
// elements in the console.
