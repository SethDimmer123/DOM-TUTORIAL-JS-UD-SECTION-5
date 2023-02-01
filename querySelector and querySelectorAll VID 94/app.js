// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result'); // just selecting the first element
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
// console.log(item);

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special'); // querySelectorAll selects the whole list

list.forEach(function(item) {
  console.log(item);
  item.style.color = 'yellow';
});

// these are my go to selectors

// forEach method iterates over the function once for every item that has the 
// class name of special.