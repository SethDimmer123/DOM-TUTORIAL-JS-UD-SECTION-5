// nodeValue-
// textContent

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue);

// these 2 properties allow me to access the textContent 
// WITHIN THE ELEMENT to print in the console

// in the console i should see "this is special content"
// based on my accessing the special h1 id.

// THEY ALSO DO THE SAMETHING