// getAttribute();
// setAttribute();

const first = document.querySelector('.first');
const idValue = first.getAttribute('id'); // i get back the value for that particular attribute
// in this case it is "special" look at line 19 in index.html file for visual aid.
// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
// console.log(showLink);

const last = link.nextElementSibling; //this grabs the next element after line 19 in index.html
last.setAttribute('class', 'first'); // class is the attribute i want to SET and first id is the value
last.textContent = 'i also have a class of first'; // i DYNAMICALLY changed the textContent
// console.log(last);
// i am DYNAMICALLY setting the attribute which in this case is I also have a class of first


const links = document.querySelectorAll('.first'); // i use querySelectorAll because i am 
// looking for all the elements that have a class of .first
// console.log(links);

// we use get and setAttribute for HTML ATTRIBUTES
// EXAMPLE: href or class= 