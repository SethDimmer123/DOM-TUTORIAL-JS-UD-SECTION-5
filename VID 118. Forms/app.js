// things that are being covered.

// form submit event listeners
// prevent default behavior that forms have.
// how to get values from the input.

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
form.addEventListener('submit', function(e) { 
  e.preventDefault(); // we use prevent default because by default we not only send the data
// to wherever the action tells us but also we are refreshing the page which is not what we want
// since we want to grab those values.
// it is impossible to grab those values since we refresh the page. that is why i use 
// preventDefault();
  console.log('form submitted');
  console.log(name.value);
  console.log(password.value);
  // the value property lets me console log whatever i am typing in the form inputs in this case.
});


// there is more to form submission than what is covered in this video.



// the main point of this vid is i am listening for submit event(line 10) when 
// i am working with forms.

// i use preventDefault inorder to access the values i type in the form input
// if i dont use that the page will refresh and the functionality will not work.