// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

// this is how you add a callback function as a reference NOT as a animous function

function changeColors() {
  let hasClass = heading.classList.contains('red'); // does the h2 contain a class of 'red'
  if (hasClass) {
    heading.classList.remove('red'); // if the class is there then we remove it
  } else {
    heading.classList.add('red'); // if the class is not there then we added it 
  }
}

btn.addEventListener('click', changeColors); //whenever i am passing in the function 
// NEVER INVOKE the function changeColors() when passing it in as a reference.

// then setup the functionaility inside the function


// imm setting logic to check if that particular class exists
// if the class is there then we will remove the particualr class
