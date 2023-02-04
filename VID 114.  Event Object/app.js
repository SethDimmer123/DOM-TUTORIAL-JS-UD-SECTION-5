// event object argument e,evt
// info about triggered event
// event.type- .type property let me find out what KIND OF EVENT IT IS
// event.currentTarget -- currentTarget is a property that is very useful.
// this keyword- we use this keyword to select a particular element
// preventDefault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

// i want to add a event listener for the heading
// a click event listener
// each time i click the heading i want to apply the class of blue

heading.addEventListener('click', event => { // i have not covered ARROW FUNCTIONS AT THIS POINT DONT WORR ABOUT IT RIGHT NOW
  console.log(event.currentTarget);
   // currentTarget property lets me see what current html element i am targeting in the console.
  console.log(this);
  //instead of using event.currentTarget i can use the "this" 
//   keyword as well ONLY IN THE REGULAR CALL BACK FUNCTION DOWN
//   NOT ON THE event listener above this text.

//just stick to event.currentTarget
});

// we use an event object to always select the element 
// that HAS the event listener attached to it.

btn.addEventListener('click', function(event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});
//.type lets me see what kind of event i am using
// which in this case is a 'click' Event Listener.
 
function someFunc(e) { // the e is the samething as (event)
  e.preventDefault();
}// the link in the html by default when clicking on the link it will 
// send me to the top of the page.

// preventDefault() prevents that from happening.

link.addEventListener('click', someFunc);



// RECAP OF THIS VIDEO(10:26)

// WHENEVER I HAVE EVENTS 
//  i have access as an arguement to event object
// since it is an arguement i can call it whatever i want 
// then i can find out about the event about triggered events

// and the properties and i learned were .type,currentTarget, "this" key word,
// and preventDefault();

