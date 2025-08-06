let displayGuess = document.getElementById("random-number"); // Hidden box
let displayResult = document.getElementById("resultScreen");  // Main display

// let generateRandom = () => {
// let random = Math.floor(Math.random() * 100 + 1);
// return random;
// }
// generateRandom(); // Random call
let random = 5;

const validateInput = () => {
    let userInput = document.getElementById("input-number").value;   // Take input from user
    userInput = Number.parseInt(userInput);  // Convert into number 
    if (isNaN(userInput)) {
        displayResult.innerText = "Please enter a number ?";
        return;
    }
    if (userInput >= 1 && userInput <= 100) {
        console.log("Number is valid ");
        // displayResult.innerText="Valid Number ..";
        // displayResult.style.color="green";
        compareNumber(userInput, random); // Compare call
    } else {
        console.log("Number is invalid . 😔");
        displayResult.innerText = "Invalid number !";
        displayResult.style.color = "red";
    }
}
validateInput(); // Validate call

const compareNumber = (userInput, random) => {
    if (random == userInput) {
        displayResult.innerText = "Congratulations . 🥳";
        displayResult.style.color = "green";
        displayResult.style.fontSize = "24px";
        displayResult.style.fontWeight = "600";
        displayGuess.innerText = random;
        displayGuess.style.background = "green";
    } else if (random < userInput) {
        displayResult.innerText = "Enter a small number !";
        displayResult.style.color = "red";
        displayResult.style.fontWeight = "400";
        displayResult.style.fontSize = "20px";
        displayGuess.style.background = "red";
    } else {
        displayResult.innerText = "Enter a big number !";
        displayResult.style.color = "red";
        displayResult.style.fontSize = "20px";
        displayResult.style.fontWeight = "400";
        displayGuess.style.background = "red";
    }
}



