// CSS

const random = document.querySelector('.random'); // editing the class of random

// the DOWNSIDE OF USING THE style Property is i am adding CSS PROPERTIES 1 at a time

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

// instead of doing what is above just use the classList so i can use ALL OF THE CSS PROPERTIES
// INSTEAD OF ADDING THEM 1 AT A TIME

random.classList.add('title');

