// remove
// removeChild

// these 2 methods allow me to remove elements from the DOM

const result = document.querySelector('#result');
// result.remove()
// dynamically my div id is not on the page anymore.




// i want to remove the second heading
// in order to use removeCHild i need to run it on a parent

// so result in this case is the parent

const heading = result.querySelector('h1');
result.removeChild(heading);
console.log(heading);


// in this case i just removed the heading from the DOM NOT THE html


// example of a node is result (line 17)







