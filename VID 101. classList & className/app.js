// className
// classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className; // className allows me to CHECK for the className
// as well as CHANGE the className OR ADD A NEW className. FROM index.html
console.log(classValue);

// second.className = 'colors text';

// third.classList.add('colors');
// third.classList.add('text');
// third.classList.add('text', 'colors');
// third.classList.remove('text');

// let result = third.classList.contains('colors');
// if (result) {
//   console.log('hello world');
// } else {
//   console.log('does not have the class');
// }

// const classValue = third.classList;
// console.log(classValue);