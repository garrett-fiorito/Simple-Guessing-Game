window.onload = function() {

let randomNum = Math.floor(Math.random() * 20); // Creates random number 1-100


const input = document.getElementById("guess"); // Variable for input text from the HTML
const submit = document.getElementById("submit"); // Variable for the submit button

submit.addEventListener("click", function() { // Attach an event listener to the submit button
    const guess = Number(input.value); // Get the value entered by the user
    if (guess === randomNum) { // Check if the guess is correct
      alert("You have won.");
    } else if (guess > randomNum) {
      alert("Your guess is too high. Try again.");
    } else {
      alert("Your guess is too low. Try again.");
    }   
});
};