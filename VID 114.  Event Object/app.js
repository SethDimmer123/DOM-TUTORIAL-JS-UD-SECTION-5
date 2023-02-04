// event object argument e,evt
// info about triggered event
// event.type- .type property let me find out what KIND OF EVENT IT IS
// event.currentTarget -- currentTarget is a property that is very useful.
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

// i want to add a event listener for the heading
// a click event listener
// each time i click the heading i want to apply the class of blue

heading.addEventListener('click', event => {
  console.log(event.currentTarget);
   // currentTarget property lets me see what current html element i am targeting in the console.
  console.log(this);
});
// we use an event object to always select the element 
// that HAS the event listener attached to it.

btn.addEventListener('click', function(event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});
//type lets me see what kind of event i am using
// which in this case is a 'click' Event Listener.
 
function someFunc(e) { // the e is the samething as (event)
  e.preventDefault();
}

link.addEventListener('click', someFunc);