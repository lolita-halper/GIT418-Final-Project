// Macaron Game with random numbers

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
    let dieDisplay1 = document.getElementById("random1");
    let dieDisplay2 = document.getElementById("random2");
    let gameMessage = document.getElementById("gameMsg");

    let die1 = getRandomNumber(1, 6);
    let die2 = getRandomNumber(1, 6);

    dieDisplay1.innerHTML = die1;
    dieDisplay2.innerHTML = die2;

    if (die1 === 1 && die2 === 1) {
        gameMessage.innerHTML = "Macarons! You Win!";
    } else {
        gameMessage.innerHTML = "You Lose. Try Again.";
    }
}

document.getElementById("gamePlay").addEventListener("click", game);



//Form for customers

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContact');
    const successMessage = document.getElementById('success');
    const formSub = document.getElementById('formSub');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Clear previous error messages
        document.querySelectorAll('.message').forEach(message => message.style.display = 'none');
        document.querySelectorAll('input, textarea').forEach(input => input.classList.remove('errorInput'));
        
        let isValid = true;
        
        // Validate Full Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'Please enter your full name');
            isValid = false;
        }
        
        // Validate Email
        const email = document.getElementById('email');
        if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate Phone
        const phone = document.getElementById('phone');
        if (phone.value.trim() === '') {
            showError(phone, 'Please enter your phone number');
            isValid = false;
        }
        
        // Validate Message
        const message = document.getElementById('messages');
        if (message.value.trim() === '') {
            showError(message, 'Please enter your message');
            isValid = false;
        }
        
        // Validate Preferred Contact Method
        const prefPhone = document.getElementById('pref-phone');
        const prefEmail = document.getElementById('pref-email');
        if (!prefPhone.checked && !prefEmail.checked) {
            showError(prefPhone, 'Please select a preferred contact method');
            showError(prefEmail, 'Please select a preferred contact method');
            isValid = false;
        }
        
        if (isValid) {
            successMessage.classList.remove('hide');
            successMessage.classList.add('show');
            
            // Display form data in the success message
            formSub.innerHTML = `
                <strong>Name:</strong> ${name.value.trim()}<br>
                <strong>Email:</strong> ${email.value.trim()}<br>
                <strong>Phone:</strong> ${phone.value.trim()}<br>
                <strong>Message:</strong> ${message.value.trim()}<br>
                <strong>Preferred Contact Method:</strong> ${prefPhone.checked ? 'Phone' : 'Email'}
            `;
            // Clear the form
            form.reset();
        }
    });
    
    function showError(input, message) {
        input.classList.add('errorInput');
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});




// Change Color - light and dark mode for body element
function toggleBodyColor() {
    var element = document.body;
    element.classList.toggle("mystyle");
}

// Change Color - light and dark mode for a specific element
function toggleDivColor() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}

// Function to call both toggle functions
function toggleColors() {
    toggleBodyColor();
    toggleDivColor();

}



// Function for my Shopping Cart

// Select all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.addCart');

// Initialize the cart count and total sum
let cartCount = 0;
let totalSum = 0;
const cartCountDisplay = document.querySelector('#pastries span');
const totalSumDisplay = document.querySelector('#total-sum');

// Function to update cart display
function updateCartDisplay() {
    cartCountDisplay.textContent = cartCount;
    totalSumDisplay.textContent = totalSum.toFixed(2); // Ensure total sum is formatted to two decimal places
}

// Add event listener to each 'Add to Cart' button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get item details from button's data attributes
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        // Update cart count
        cartCount++;
        totalSum += itemPrice;
        cartCountDisplay.textContent = cartCount;
        updateCartDisplay();

    })
});

// Select the "Remove One Item" button
const removeOneItemButton = document.querySelector('.removeOneItem');

// Add event listener to the "Remove One Item" button
removeOneItemButton.addEventListener('click', () => {
    // Ensure there is at least one item in the cart to remove
    if (cartCount > 0) {
        // Get the price of the last added item to remove
        const lastAddedItemPrice = parseFloat(removeOneItemButton.getAttribute('data-last-price'));

        // Update cart count and total sum
        cartCount--;
        totalSum -= lastAddedItemPrice;

        // Update cart display
        cartCountDisplay.textContent = cartCount;
        updateCartDisplay();
    }
});