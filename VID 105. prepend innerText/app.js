// prepend method
// innerText-property

// this allows me to set text right away instead of 
// creating a textNode and appending to whatever element

const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`;
document.body.prepend(heading); //prepend instead of appened puts my heading in front of the index.html heading 1 element




