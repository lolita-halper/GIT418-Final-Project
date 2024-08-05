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
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContact");
    const successMessage = document.getElementById("success");
    const formSub = document.getElementById("formSub");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Clear previous error messages
      document
        .querySelectorAll(".message")
        .forEach((message) => (message.style.display = "none"));
      document
        .querySelectorAll("input, textarea")
        .forEach((input) => input.classList.remove("errorInput"));
  
      let isValid = true;
  
      // Validate Full Name
      const name = document.getElementById("name");
      if (name.value.trim() === "") {
        showError(name, "Please enter your full name");
        isValid = false;
      }
  
      // Validate Email
      const email = document.getElementById("email");
      if (!validateEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address");
        isValid = false;
      }
  
      // Validate Phone
      const phone = document.getElementById("phone");
      if (phone.value.trim() === "") {
        showError(phone, "Please enter your phone number");
        isValid = false;
      }
  
      // Validate Message
      const message = document.getElementById("messages");
      if (message.value.trim() === "") {
        showError(message, "Please enter your message");
        isValid = false;
      }
  
      // Validate Preferred Contact Method
      const prefPhone = document.getElementById("pref-phone");
      const prefEmail = document.getElementById("pref-email");
      if (!prefPhone.checked && !prefEmail.checked) {
        showError(prefPhone, "Please select a preferred contact method");
        showError(prefEmail, "Please select a preferred contact method");
        isValid = false;
      }
  
      if (isValid) {
        successMessage.classList.remove("hide");
        successMessage.classList.add("show");
  
        // Display form data in the success message
        formSub.innerHTML = `
                  <strong>Name:</strong> ${name.value.trim()}<br>
                  <strong>Email:</strong> ${email.value.trim()}<br>
                  <strong>Phone:</strong> ${phone.value.trim()}<br>
                  <strong>Message:</strong> ${message.value.trim()}<br>
                  <strong>Preferred Contact Method:</strong> ${
                    prefPhone.checked ? "Phone" : "Email"
                  }
              `;
        // Clear the form
        form.reset();
      }
    });
  
    function showError(input, message) {
      input.classList.add("errorInput");
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  

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
  
      const tax = subtotal * taxRate;  // Calculate tax based on subtotal
      const total = subtotal + tax;    // Calculate total amount including tax
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
   // Function to add an item to the cart
    const addToCart = (name, price) => {
      if (!cart[name]) {
        cart[name] = { price, quantity: 0 };   // Initialize item in cart if not already present
      }
      cart[name].quantity += 1;  // Increase item quantity by 1
      console.log(
        `Added to cart: ${name} (Quantity: ${cart[name].quantity}, Price: ${cart[name].price})`
      ); // Debug log
      updateCartDisplay();  // Update the cart display
    };

  // Function to adjust the quantity of an item in the cart
    const adjustQuantity = (name, action) => {
      if (!cart[name]) return;
  
      if (action === "increase") {
        cart[name].quantity += 1;  // Increase item quantity by 1
      } else if (action === "decrease") {
        if (cart[name].quantity > 0) {
          cart[name].quantity -= 1;  // Decrease item quantity by 1 if greater than 0
        }
      }
      console.log(
        `Adjusted quantity for: ${name} (Quantity: ${cart[name].quantity})`
      ); // Debug log
      updateCartDisplay();
    };

  // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll(".addCart").forEach((button) => {
      button.addEventListener("click", (event) => {
        const name = event.target.getAttribute("data-name");
        const price = parseFloat(event.target.getAttribute("data-price"));
        console.log(
          `Button clicked: Add to Cart (Name: ${name}, Price: ${price})`
        ); // Debug log
        addToCart(name, price);
  
        const decreaseButton = document.querySelector(
          `.adjustQuantity[data-name="${name}"][data-action="decrease"]`
        );
        const increaseButton = document.querySelector(
          `.adjustQuantity[data-name="${name}"][data-action="increase"]`
        );
  
        if (decreaseButton && increaseButton) {
          decreaseButton.disabled = false;
          increaseButton.disabled = false;
        }
      });
    });

  // Add event listeners to quantity adjustment buttons
    document.querySelectorAll(".adjustQuantity").forEach((button) => {
      button.addEventListener("click", (event) => {
        const name = event.target.getAttribute("data-name");
        const action = event.target.getAttribute("data-action");
        console.log(
          `Button clicked: Adjust Quantity (Name: ${name}, Action: ${action})`
        ); // Debug log
        adjustQuantity(name, action);   // Adjust item quantity
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