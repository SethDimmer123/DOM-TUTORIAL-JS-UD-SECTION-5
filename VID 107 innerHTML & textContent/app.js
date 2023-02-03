// innerHTML
// textContent


const list = document.getElementById('first')
const div = document.getElementById('second')
const item = document.querySelector('.item')

console.log(div.textContent); // text content property only returns the text in the console.
console.log(list.innerHTML); // returns the whole HTML structure within 
// the element i have selected which in this case is the unordered list
//  with an id of first.
console.log(list.textContent);


const randomVar = 'random value'

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${randomVar}</li>
<li>list item</li><li>list item</li>`;
document.body.appendChild(ul);


// but there are cases where i can either use textContent or innerHTML

// example of this below.

// lets say i have my div of second and have selected it
// and it is sitting in my variable of div.

// if i wanted to change the text content or the content of my 
// text within the div
// do this

// div.textContent = 'hello world'

// on the browser page i have changed the html text from 
// 'i have some text content' to 'hello world'.












