// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn'); //gives me access to all of the buttons

btns.forEach(btn => { // i have NOT gone over arrow functions yet. i can use a animous function (function(btn))
    // forEach is for looping over my buttons
    // each time i click my buttons
  btn.addEventListener('click', function(e) {// for all the buttons i want to 
    // listen for 'click' and writeout the animous function.

    // console.log(e.currentTarget); // i can use the current target since each time 
    // i am using the current target i am ACCESSING the element that i am clicking on.

    // e.currentTarget.style.color = 'green';
    // i use the currentTarget so only when i click a specific button
    // then the text of the button will turn green.

    // console.log('current', e.currentTarget);
    console.log('target', e.target); // console logging the target property
    // i am doing the exact samething as before.
    // for the first and third buttons 

    // but since i have a element in this case <strong> that is within a button
    // only the ELEMENT that i am clicking on is going to change its color to green
    e.target.style.color = 'green';
  });
});


//currentTarget- since i added the event handlers to my buttons when i use 
// currentTarget i am always referencing the button ITSELF

// target- when i am using the target only the element in which since i clicked on
// in this case the nested strong tag element only that TEXT FOR THAT SPECIFC ELEMENT TURNED GREEN.