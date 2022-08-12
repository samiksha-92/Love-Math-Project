// Wait for the DOM content to finish loading before running game
// Get button elemeents in an array and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}!`);
            }
        })
    }

})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 **/
function runGame() {
    //Creates 2 random numbers between 1 and 25
    let num1 = Math.ceil(math.random() * 26);
    let num2 = Math.ceil(math.random() * 26);
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplicationQuestion() {

}