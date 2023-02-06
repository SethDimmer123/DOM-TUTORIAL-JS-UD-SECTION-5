// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello() {
  console.log('hello there');
}

btn.addEventListener('click', function() {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `i'm inside container`;
  container.appendChild(element);
});
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('heading')) { // WHEN I CLICK ON THE h1 
    // the console log shows up in the console.
    console.log('hello');
  }
});

// heading.addEventListener('click', sayHello);

//  i cannot add an event listener to an element that does not exist (4:57)


// even though i am adding my headings (5:26) i am adding them dynamically

//  if i inspect element the elements are there but i CANNOT ACCESS THEM USING THE
// HEADING CLASS.(5:30)

// WHEN I RUN THE CODE THE headings are not in the console



// THIS WHERE EVENT BUBBLING COMES IN
// the solution is we target the parent element and and say 
// 'if the event.target' contains the class of heading then i log the dynamic element.
// (5:40)



