// ======= DOM Elements ===========
let displayGuess = document.getElementById("random-number"); // Box to display the random number when guessed correctly
let displayResult = document.getElementById("resultScreen"); // Screen to display result messages (like "Too High", "Too Low", etc.)
let resetButton = document.getElementById("reset-btn");
// ======= Generate Random Number (1 to 100) ===========
const generateRandom = ()=> {
    let number = Math.floor(Math.random() * 100 + 1); // Generates a new random number between 1 and 100
    return number;
}
let random = generateRandom();
// ======= Function: Validate User Input ===========
const validateInput = () => {
    let userInput = document.getElementById("input-number").value; // Get input from user
    userInput = Number.parseInt(userInput); // Convert string input to integer

    // Check if input is a valid number
    if (isNaN(userInput)) {
        displayResult.innerText = "Please enter a number ?";
        return; // Exit function if input is not a number
    }
    // Validate that input is in range (1 to 100)
    if (userInput >= 1 && userInput <= 100) {
        console.log("Number is valid");
        compareNumber(userInput, random); // Call function to compare with random number
    } else {
        console.log("Number is invalid.😔");
        displayResult.innerText = "Invalid number !";
        displayResult.style.color = "red";
    }
};

// ======= Function: Compare Random Number with User Input ===========
const compareNumber = (userInput, random) => {
    if (userInput == random) {
        // Correct guess
        console.log("Number is matched");
        displayResult.innerText = "Congratulations.🥳";
        displayResult.style.color = "green";
        displayResult.style.fontSize = "24px";
        displayResult.style.fontWeight = "600";
        displayGuess.innerText = random; // Reveal the random number
        displayGuess.style.background = "green";
        // resetGame(userInput, random);
    } else if (random < userInput) {
        // User guessed too high
        console.log("Number is greater");
        displayResult.innerText = "Enter a small number !";
        displayResult.style.color = "red";
        displayResult.style.fontWeight = "400";
        displayResult.style.fontSize = "20px";
        displayGuess.style.background = "red";
    } else {
        // User guessed too low
        console.log("Number is smaller");
        displayResult.innerText = "Enter a big number !";
        displayResult.style.color = "red";
        displayResult.style.fontSize = "20px";
        displayResult.style.fontWeight = "400";
        displayGuess.style.background = "red";
    }
};
// ======= Function: Reset when user Guessed the number ===========
const resetGame = (userInput,random) =>{
 if(userInput == random)
    generateRandom(); 
    userInput = "";
    
};