// Get the input fields for quantity and amount using their id values
let quantity = document.getElementById('Cost');
let amount = document.getElementById('Amount');

// Define a function to calculate the total cost of fuel based on quantity and price
function calc() {
// Calculate the total cost
let price = quantity.value * amount.value;

// Set the result in the HTML element with id 'total'
document.getElementById('total').innerHTML = "YOUR TOTAL COST IS AED " + price;

// Return false to prevent the form from submitting and refreshing the page
return false;
}