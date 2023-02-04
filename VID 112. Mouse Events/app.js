// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() { 
//when mouse is clicked whatever the string in the console log shows up
  console.log('you clicked me');
});
btn.addEventListener('mousedown', function() {
    //whenever i click the mouse but not when i stop pressing the string in the log shows up in the console
  console.log('down');
});
btn.addEventListener('mouseup', function() {
  console.log('up');
});

heading.addEventListener('mouseenter', function() {
// when the mouse is hovered over heading background-color changes to blue
  heading.classList.add('blue');
});
heading.addEventListener('mouseleave', function() {
  heading.classList.remove('blue');
});