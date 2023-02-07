// JSON.stringify() -- converts my value to JSON STRING
// , JSON.parse -- gets back my initial value.

const friends = ['john', 'peter', 'bob'];
localStorage.setItem('friends', JSON.stringify(friends)); 

//when i work with localStorage and the value is more complicated 
// than just a simple string in this case it was an array
//  i need to store it using 
// JSON.STRINGIFY first --pass my value which in this case is friends
// then when i am accessing the value i need to have JSON.parse then pass in localStorage.getItem
// ino rder to keep the data structure i had in this case it is an array.

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]); 





// let fruits;

// if (localStorage.getItem('fruits')) {
//   fruits = JSON.parse(localStorage.getItem('fruits'));
// } else {
//   fruits = [];
// }
// console.log(fruits);
// // fruits.push('apple');
// fruits.push('orange');
// localStorage.setItem('fruits', JSON.stringify(fruits));