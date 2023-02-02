// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
// console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);


// Main points of this video

// sometimes iw ill not be able to use the methods i have previously leanred 
// in the videos before this one

// so i will need to move up and down the DOM TREE
// USING 
// children,firstChild,lastChild properties


// but i need to be careful of ehat property i am using 
// becuase some of them will return all childNodes including whitespace





