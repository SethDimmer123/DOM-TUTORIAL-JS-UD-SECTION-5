// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// const classValue = first.className; 
// className allows me to CHECK for the className
// as well as CHANGE the className OR ADD A NEW className. FROM index.html
// console.log(classValue);

second.className = 'text colors'; // second element great example on adding 
// a new class name "colors"




third.classList.add('colors'); // i add the css class of colors to the third element
third.classList.add('text');
third.classList.add('text', 'colors');
third.classList.remove('text');

let result = third.classList.contains('colors'); //contains checks 'colors' if the particaular html element has the class i want to edit
if (result) {
  console.log('hello world');
} else {
  console.log('does not have the class');
}

// if the 3rd html element has the class then console log 'hello world'.

// if the 3rd html element DOES NOT HAVE the class then console log the else statement

const classValue = third.classList;
console.log(classValue);