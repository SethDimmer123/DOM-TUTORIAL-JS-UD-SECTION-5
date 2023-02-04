// core principles about events

// select element
// addEventListener()
// what event am i going to be listening for AND  what to do WITH it(callback function)

const btn = document.querySelector('.btn'); // i am LISTENING FOR THE CLICK EVENTS ON A BUTTON.
const heading = document.querySelector('h2');

btn.addEventListener('click', function() {
  heading.classList.add('red');
});

//lets say a user clicks a button what is it that i would want to do.

