'use strict';

// sticky nav animation with jquery

document.addEventListener('DOMContentLoaded', () => {
  // Add a scroll event listener to the window object
  window.addEventListener('scroll', () => {
    // Get the header element by the ID
    const header = document.getElementById('home');
    if (document.documentElement.scrollTop < 1) {
      // If scrolled to the top, remove 'fixed' and 'active' classes
      header.classList.remove('fixed');
      header.classList.remove('active');
      // If scrolled more than 400px, remove 'fixed' and add 'active' class
    } else if (document.documentElement.scrollTop > 400) {
      header.classList.remove('fixed');
      header.classList.add('active');
    } else {
       // If scrolled between 1px and 400px, add 'fixed' class and remove 'active' class
      header.classList.add('fixed');
      header.classList.remove('active');
    }
  });
});


// Macaron Game with random numbers

// Function to generate a random number between a given min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // Main game function
  function game() {
    // Get the elements where the die values and game message will be displayed
    let dieDisplay1 = document.getElementById("random1");
    let dieDisplay2 = document.getElementById("random2");
    let gameMessage = document.getElementById("gameMsg");
  // Generate random numbers for the two dice
    let die1 = getRandomNumber(1, 6);
    let die2 = getRandomNumber(1, 6);
  // Display the die values in the respective elements
    dieDisplay1.innerHTML = die1;
    dieDisplay2.innerHTML = die2;
  // Check if both dice show 1, which is a win condition
    if (die1 === 1 && die2 === 1) {
      gameMessage.innerHTML = "Macarons! You Win!";
    } else {
      gameMessage.innerHTML = "You Lose. Try Again.";
    }
  }
  // Add an event listener to the play button to start the game when clicked
  document.getElementById("gamePlay").addEventListener("click", game);
  

  //Form for Customers

function formContact(e) {
  // prevent default form submission
  e.preventDefault();

  // access the form itself and save in a variable
  let myForm = document.querySelector("#formContact");

  // access all of the error spans to be used as error message holders
  let errorSpans = document.querySelectorAll("#formContact .message");

  // boolean variable used to track form validity
  let isValid = true;

  // reset display of the error inputs before validating
  myForm.fullName.classList.remove("errorInput");
  myForm.email.classList.remove("errorInput");
  myForm.phone.classList.remove("errorInput");
  myForm.message.classList.remove("errorInput");
  document
    .getElementsByClassName("radio_control")[0]
    .classList.remove("errorInput");
  document
    .getElementsByClassName("radio_control")[1]
    .classList.remove("errorInput");

  // reset the display of the error message spans
  errorSpans.forEach(function (span) {
    span.classList.remove("error");
  });

  // hide the success area on the page - this is what shows the user what they submitted in the form when submission is successful
  document.querySelector("#success").classList.remove("show");
  document.querySelector("#success").classList.add("hide");

  // regular expressions to validate the username/asurite and zipcode
  let fNameRegex = /^[a-z ,.'-]+$/i;
  let eRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let pRegex = /^(?:\+?\d{1,3}[ -]?)?\(?\d{2,4}\)?[ -]?\d{2,4}[ -]?\d{2,4}[ -]?\d{2,4}$/;

  // validate full name, it should not be blank and should match the fullName regex
  if (myForm.fullName.value === "" || !fNameRegex.test(myForm.fullName.value)) {
    // on error, add the errorInput class to the input itself
    myForm.fullName.classList.add("errorInput");

    // on error, add the error class to the span associated with this input that has the message class
    errorSpans[0].classList.add("error");

    // set the form validation tracking variable to false
    isValid = false;
  }

  // validate email, it should not be blank and should match the email regex
  if (myForm.email.value === "" || !eRegex.test(myForm.email.value)) {
    // on error, add the errorInput class to the input itself
    myForm.email.classList.add("errorInput");

    // on error, add the error class to the span associated with this input that has the message class
    errorSpans[1].classList.add("error");

    // set the form validation tracking variable to false
    isValid = false;
  }

  // validate phone number, it should not be blank and should match the phone regex
  if (myForm.phone.value === "" || !pRegex.test(myForm.phone.value)) {
    // on error, add the errorInput class to the input itself
    myForm.phone.classList.add("errorInput");

    // on error, add the error class to the span associated with this input that has the message class
    errorSpans[2].classList.add("error");

    // set the form validation tracking variable to false
    isValid = false;
  }

  // validate message, it should not be blank
  if (myForm.message.value === "") {
    // on error, add the errorInput class to the input itself
    myForm.message.classList.add("errorInput");

    // on error, add the error class to the span associated with this input that has the message class
    errorSpans[3].classList.add("error");

    // set the form validation tracking variable to false
    isValid = false;
  }

  // validate preferred contact method
  let contactIsValid = false;
  if (!myForm["pref-contact"].value) {
    document.querySelector("#contact").classList.add("error");
    errorSpans[4].classList.add("error");
    contactIsValid = false;
    isValid = false;
  } else {
    contactIsValid = true;
  }

  // if the form is valid, submit it and reset
  if (isValid) {
    // display the 'success' section to the user
    document.querySelector("#success").classList.remove("hide");
    document.querySelector("#success").classList.add("show");

    // display the user's input data (to show what they are sending to the server)
    document.getElementById(
      "formSub"
    ).innerHTML = `<strong>Full Name: </strong>${myForm.fullName.value}<br><strong>Email Address: </strong>${myForm.email.value}<br><strong>Phone Number: </strong>${myForm.phone.value}<br><strong>Message: </strong>${myForm.message.value}<br><strong>Preferred Contact Method: </strong>${myForm["pref-contact"].value}`;

    // reset the form
    myForm.reset();
  }
}

// for validation on submit
document.getElementById("formContact").addEventListener("submit", formContact);
  


// Change Color - light and dark mode for body element

// selectors
const themeToggleBtn = document.querySelector('.toggleColors');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
const handleThemeToggle = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.removeItem('theme');
  }
};
  
// events
themeToggleBtn.addEventListener('click', handleThemeToggle );
  


  // Function for my Shopping Cart
  
  document.addEventListener("DOMContentLoaded", () => {
    const cart = {};
    const taxRate = 0.0875;
  
    // Function to update the cart display
    const updateCartDisplay = () => {
      const cartItemCount = document.getElementById("cartItemCount");
      const subtotalSum = document.getElementById("subtotal-sum");
      const taxSum = document.getElementById("tax-sum");
      const totalSum = document.getElementById("total-sum");
  
      let subtotal = 0;
      // Calculate the subtotal by summing up the price of each item multiplied by its quantity
      for (const item in cart) {
        subtotal += cart[item].price * cart[item].quantity;
      }
  
      const tax = subtotal * taxRate; // Calculate tax based on subtotal
      const total = subtotal + tax; // Calculate total amount including tax
      // Update the text content of the respective elements with the calculated values
      cartItemCount.textContent = `(${Object.keys(cart).reduce(
        (sum, item) => sum + cart[item].quantity,
        0
      )})`;
      subtotalSum.textContent = subtotal.toFixed(2);
      taxSum.textContent = tax.toFixed(2);
      totalSum.textContent = total.toFixed(2);
  
      // Enable/disable quantity adjustment buttons and update quantity display
      Object.keys(cart).forEach((name) => {
        const item = cart[name];
        const decreaseButton = document.querySelector(
          `.adjustQuantity[data-name="${name}"][data-action="decrease"]`
        );
        const increaseButton = document.querySelector(
          `.adjustQuantity[data-name="${name}"][data-action="increase"]`
        );
        const quantityDisplay = document.querySelector(
          `.quantityDisplay[data-name="${name}"]`
        );
        // Update button states and quantity display based on item quantity
        if (decreaseButton && increaseButton && quantityDisplay) {
          decreaseButton.disabled = item.quantity === 0; // Disable decrease button when quantity is 0
          increaseButton.disabled = false; // Always enable increase button
          quantityDisplay.textContent = item.quantity;
        }
      });
    };
  
    // Function to adjust the quantity of an item in the cart
    const adjustQuantity = (name, action) => {
      if (!cart[name]) {
        cart[name] = { price: 24, quantity: 0 }; // Default price if not set
      }
  
      if (action === "increase") {
        cart[name].quantity += 1; // Increase item quantity by 1
      } else if (action === "decrease") {
        if (cart[name].quantity > 0) {
          cart[name].quantity -= 1; // Decrease item quantity by 1 if greater than 0
        }
      }
      console.log(
        `Adjusted quantity for: ${name} (Quantity: ${cart[name].quantity})`
      ); // Debug log
      updateCartDisplay();
    };
  
    // Add event listeners to quantity adjustment buttons
    document.querySelectorAll(".adjustQuantity").forEach((button) => {
      button.addEventListener("click", (event) => {
        const name = event.target.getAttribute("data-name");
        const action = event.target.getAttribute("data-action");
        console.log(
          `Button clicked: Adjust Quantity (Name: ${name}, Action: ${action})`
        ); // Debug log
        adjustQuantity(name, action); // Adjust item quantity
      });
    });
  
    updateCartDisplay();
  });
  




  // tabs with the bakery locations section
  $( function() {
    $( "#tabs" ).tabs();
  } );

  //use datepicker to choose delivery date
  $( function(){
    $("#datepicker").datepicker({
      // Set the date format to display as Day, Month Date, Year
      dateFormat: "DD, MM d, yy",
      // Define a function to run when a date is selected from the datepicker
      onSelect: function(dateText){
        $(this).change();
      }
    })
     // Attach an event handler for the 'change' event on the datepicker element
    .on("change", function(){
      $("#dateDisplay").html("You have Selected: " +
        $(this).val());
    })
  });
  
  // Slide show / carousel inside the "howTo section"

  $(document).ready(function() {
    // Select the slideshow container with the class "cycle-slideshow"
    let $slideshow = $(".cycle-slideshow");
// Toggle pause and resume of the slideshow when it is clicked
    $slideshow.on("click", function() {
      // If the slideshow is currently paused, resume the slideshow
        if ($slideshow.is(".cycle-paused"))
            $slideshow.cycle("resume");
          // Otherwise, pause the slideshow                
        else
            $slideshow.cycle("pause");
    });
// Event handler for the previous button to navigate to the previous slide
    $("#previous-btn").on("click", function() {
      // Stop the current slideshow
        $slideshow.cycle("stop");
         // Move to the previous slide
        $slideshow.cycle("prev");
    });
// Event handler for the next button to navigate to the next slide
    $("#next-btn").on("click", function() {
        $slideshow.cycle("stop");
        $slideshow.cycle("next");
    });
});