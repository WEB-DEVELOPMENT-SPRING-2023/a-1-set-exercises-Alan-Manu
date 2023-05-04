// Define an array of three numbers.
var arr = [0, 1, 2];

// Generate three random values for red, green, and blue, respectively.
var r = Math.floor((Math.random())*256);
var g = Math.floor((Math.random())*256);
var b = Math.floor((Math.random())*256);

// Display the generated RGB value on the webpage.
document.getElementById("colorName").innerHTML = "( " + r + " , " + g + " , " + b + " )";

// Select a random index from the array to set the color of a button.
var index = Math.floor((Math.random())*3);

// Set the background color of the button with the randomly chosen index.
document.getElementById(index).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

// Remove the chosen index from the array to ensure it isn't chosen again.
arr.splice(index, 1);

// Generate two more random RGB values for the remaining two buttons.
var r1 = Math.floor((Math.random())*256);
var g1 = Math.floor((Math.random())*256);
var b1 = Math.floor((Math.random())*256);

var r2 = Math.floor((Math.random())*256);
var g2 = Math.floor((Math.random())*256);
var b2 = Math.floor((Math.random())*256);

// Set the background color of the remaining two buttons to the new RGB values.
document.getElementById(arr[0]).style.backgroundColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
document.getElementById(arr[1]).style.backgroundColor = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

// Function to handle the user's button click and determine if they guessed correctly.
function guess() {
if (document.activeElement.id == index) {
document.getElementById("colorName").innerHTML = "CORRECT !!";
document.getElementById("colorName").style.color = "darkgreen";
} else {
document.getElementById("colorName").innerHTML = "WRONG !!";
document.getElementById("colorName").style.color = "red";
}

// Remove the button click events to prevent multiple guesses.
document.getElementsByClassName("btn")[0].removeAttribute("onclick");
document.getElementsByClassName("btn")[1].removeAttribute("onclick");
document.getElementsByClassName("btn")[2].removeAttribute("onclick");
}

// Function to handle the "Replay" button click and reload the webpage.
function replay() {
window.location.reload();
}