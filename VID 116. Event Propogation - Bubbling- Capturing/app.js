// allows select dynamic elements 
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target(8:48)

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target', e.currentTarget);
  console.log('target', e.target);
  if (e.target.classList.contains('link')) {
    console.log('you clicked on the link');
  }
} // if the target im clicking on actually contains the link then console log i clicked on the link.
function stopPropogation(e) {
  e.stopPropagation(); // this stops me from listening for the events for example container
} // i will only get a link if i click on a link.

list.addEventListener('click', showBubbling, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });


// event bubbling which is the default behavior and the elements will BUBBLE UP
// parent, parent of the parent and all the way up to a window where i can register those events

// or i can use
//event capturing when clicked starts at the window then works its way up the chain starts 
// at the root then go down all they way to the actual element which in
// this case was the link but registered the list items.
// That is why list items is the last one in the console.



// just remember the principle of this is to allow me to select dynamic elements



