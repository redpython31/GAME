// let hiddenGuess = document.getElementById ("random-number");

let generateRandom = () => {
    let random = Math.floor(Math.random() * 100 + 1);
    return random;
}
generateRandom();

const validateInput = () => {
    while (true) {
        let userInput = document.getElementById("input-number").value;
        userInput = Number.parseInt(userInput);
        if (userInput >= 0 && userInput <= 100) {
            compareInput(userInput);
            // break;
        } else {
            document.getElementById("input-number").innerText;

        }
    }
}
let compareInput = () => {
    while (true) {

    }
}

