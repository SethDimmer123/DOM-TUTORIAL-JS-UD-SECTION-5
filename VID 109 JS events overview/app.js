const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');
const text = document.querySelector('p');

text.addEventListener('mouseenter', function() {
  heading.classList.add('red');
});

// THE MOMENT I ENTER THE AREA OF THE p tag the mouseenter event listener activates.
text.addEventListener('mouseleave', function() {
  heading.classList.remove('red');
});
btn.addEventListener('click', function() {
  if (heading.classList.contains('blue')) {
    heading.classList.remove('blue');
  } else {
    heading.classList.add('blue');
  }
});

//when i click the button the h2 background color is activated.


// an event could be a simple mouse click or windows scroll

// or a form submission

// these are example of events in javascript

// we will only cover a couple NOT ALL OF THEM 

// I JUST NEED TO UNDERSTAND THE PRINCIPLES BEHIND THE EVENTS.

// ONCE I UNDERSTAND THE PRINCIPLES
// THEN IT WILL BE EASIER TO LEARN A NEW EVENT