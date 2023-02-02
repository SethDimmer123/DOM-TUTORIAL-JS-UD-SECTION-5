// nodeValue-
// textContent

const item = document.getElementById('special');
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log(easyValue);

// these 2 properties allow me to access the textContent 
// WITHIN THE ELEMENT

// THEY ALSO DO THE SAMETHING