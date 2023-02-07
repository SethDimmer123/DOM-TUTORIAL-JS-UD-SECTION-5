// what i am going over in this video.

// Web Storage API - provided by browser
// session storage, local storage

// method names on line 7.
// setItem, getItem , removeItem, clear

// localStorage.setItem('name','john') // API is local storage
// within the setItem i am passing in 2 things:
// name of the key 'name'
// and whatever value i am passing 'john'
// sessionStorage.setItem('name','john')


// LOCAL STORAGE AND SESSION STORAGE KEEP THE DATA IN THE KEY AND VALUE IN THE APPLICATION TAB
// (2:33)


// HOWEVER if i open up a new tab and DO NOT SET THE localStorage or session storage from 
// scratch then only localStorage will have the data(key name annd value).

// BUT THE session storage will BE EMPTY.
// session storage only keeps the info(data) WHILE the tab is still open

// localStorage keeps the data between the opening and closing of the browser windows.


// EXPLANNATION OF WHY I WOULD WANT TO USE localStorage(3:28)

// adding a stuff to a cart to buy.

// lets say i navigate away from my application
// but i still want to keep this data.

// in case i want to come back

// localStorage still keeps the data even if i navigate away from the application
// i will still have info in my localStorage of what was the data in my cart.

// that is why local storage is so useful.

/*IF I WANT TO DELETE WHATEVER IS INSIDE LOCAL STORAGE I CANPREES THE DELETE BUTTON IN THE 
APPLICATION TAB IN LOCAL STORAGE AS WELL AS SESSION STORAGE */




// localStorage.setItem('name', 'john'); // the method is looking for 2 things key and value
// which in this case is 'name', 'john'
// localStorage.setItem('friend', 'peter'); //(5:50) 
// IF I USE THE SAME KEY NAME THEN I WILL OVERRIDE THE VALUE
// localStorage.setItem('job', 'developer');
// localStorage.setItem('address', 'street 123');


// (6:54) AT THIS TIME STAMP I HAVE ALL THE ITEMS FROM LINE 49 TO 54 IN LOCAL STORAGE.
// HOW DO I ACCESS THEM?

// USE THE getItem method example down below

// const name = localStorage.getItem('name');
// console.log(name);

//  IF I LOOK IN THE CONSOLE I HAVE NOW SUCCESSFULLY ACCESSED THE NAME KEY IN 
// THIS CASE WHICH WAS 'john'


//OPTIONS OF HOW TO REMOVE ITEMS FROM LOCAL STORAGE DOWN BELOW

// localStorage.removeItem('name'); // i use this to remove one specific item.
// specifcally say what key i want to remove which in this case is 'name'.


// if i wanted to access the name i just deleted i would NOT BE ABLE TO.

// i will not get any value and instead i will get null.

// why am i getting null?

// because i removed that particular key

// const anotherName = localStorage.getItem('name');
// console.log(anotherName);


// (8:58)

// I USE THIS TO REMOVE THE WHOLE LOCAL STORAGE

// localStorage.clear();

// NO KEYS AND NO VALUES IN LOCALSTORAGE TAB IN APPLICATIONS TAB IN INSPECT ELEMENT TAB.

// just remember the method names

// look at application tab in inspect element