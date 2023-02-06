// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname'); //EXAMPLE - <h2></h2>
// HTMLCollection =  array-like object
// index, length property but not array methods (forEach)
//  IN MOST CASES I WILL USE QUERYSELECTORALL DONT WORRY IF I DONT UNDERSTAND THE FOREACH





// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties and methods

// const headings = document.getElementsByTagName('h2');
// headings[0].style.color = 'red'; // this sets the first heading to red and has a index of 0
// console.log(headings.length); // this means i have 2 headings

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';

const betterItems = [...items]; // turns the <li></li> into an array

betterItems.forEach(function (item) { 
  console.log(item); // we use the forEach property to show the individual item
});

console.log(items);
console.log(betterItems); // console logs the list items in an array