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



// down below i am covering how to check if the value is ALREADY IN localStorage
// IF IT IS IN localStorage then i will assign it 

// IF THE VALUE IS NOT IN localStorage then i will have an EMPTY ARRAY.

// THIS IS SOMETHING I WILL DO IN THE PROJECTS.

let fruits; //first i am creating an empty array
// an empty array is just a variable with the name of fruits

if (localStorage.getItem('fruits')) {// if tbis doesnt exist then the else statement runs
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = []; // if the fruits key in the application 
//   tab DOES NOT exist then i will get back an empty array in the console.
}
console.log(fruits);
fruits.push('apple');
// fruits.push('orange'); // each time i refresh i add another fruit to the array.
localStorage.setItem('fruits', JSON.stringify(fruits)); 

//LINE 38 IS HOW I PUSH MY fruits array to my localStorage



// general principle of the stuff between lines 19 and 40 is 

// in my next projects i am going to check first if the item(fruits) is ALREADY in the local storage(loom at line 29)
//  if it is then i am going to grab the value (line 30)
// if the value is NOT in localStorage then we will set it equal to an empty array.

