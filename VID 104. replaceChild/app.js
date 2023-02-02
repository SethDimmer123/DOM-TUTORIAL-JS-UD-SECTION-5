// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// replaceChild('new','old');

// TAKES 2 ARGUEMENTS

// 1. new element- what element i am going to be placing.
// 2. old element- which element i am going to be REPLACING

const result = document.querySelector('#result');
const first = document.querySelector('.red');
// create empty element

const bodyDiv = document.createElement('div');


// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);
// result element
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i'm small heading text`);
smallHeading.classList.add('red'); //background-color
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);
// bodyDiv div was changed to a heading 6 (smallHeading)
console.log(result.children);