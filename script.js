var canvas = document.querySelector("canvas");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var difficulty = document.getElementById("difficulty");
var c = canvas.getContext("2d");
var letterBank = document.getElementById("letterbank");
var input = document.getElementById("input");
var userGuess = document.getElementById("userGuess");
var guessButton = document.getElementById("submitButton");
let word;

easyBtn.addEventListener("click", function(clickEvent) {
    canvas.className = "";;
    difficulty.innerText = "You've selected EASY";
    // setupCanvas
    hideButtons();
})

mediumBtn.addEventListener("click", function(clickEvent) {
    setupCanvas(); 
    hideButtons();
    canvas.className = "";
    difficulty.innerText = "You've selected MEDIUM";
})

hardBtn.addEventListener("click", function(clickEvent) {   
    setupCanvas(); 
    hideButtons();
    canvas.className = "";
    difficulty.innerText = "You've selected HARD";
})

input.addEventListener("submit", function(submitEvent){
    submitEvent.preventDefault();
})

function hideButtons() {
    easyBtn.className = "hide";
    mediumBtn.className = "hide";
    hardBtn.className = "hide";
}

class Hangman {
    constructor() {
    }

    play() {
        input.className = "";
        var letters = [];
        var spaces = [];
        for (var i = 0; i < this.gameWord.toString().length; i++) {
                letters[i] = this.gameWord.charAt(i);
                spaces[i] =  "_    ";
                console.log(letters[i]);
                letterBank.appendChild(document.createTextNode(spaces[i]));
        }
    }

    checkGuess() {
        var alphabet = [
            "A","B","C", "D", "E","F","G","H",
            "I","J","K","L","M","N","O","P","Q",
            "R","S", "T","U","V","W","X","Y","Z"
        ]
        var guess = document.getElementById()
        console.log(guess);

    }

    drawRightLeg() {
        c.beginPath();
        c.moveTo(250, 350);
        c.lineTo(325, 425);
        c.stroke();
    }

    drawLeftLeg() {
        c.beginPath();
        c.moveTo(250, 350);
        c.lineTo(175, 425);
        c.stroke();
    }

    drawRightArm() {
        c.beginPath();
        c.moveTo(250, 275);
        c.lineTo(325, 235);
        c.stroke();
    }

    drawLeftArm() {
        c.beginPath();
        c.moveTo(250, 275);
        c.lineTo(175, 235);
        c.stroke();
    }
    
    drawBody() {
        c.beginPath();
        c.moveTo(250, 200);
        c.lineTo(250, 350);
        c.stroke();
    }

    drawHead() {
        c.strokeStyle = "black";
        c.beginPath();
        c.arc(250, 150, 50, 0, Math.PI * 2, false);
        c.stroke();
    }

    setupCanvas() {
        canvas.width = 500;
        canvas.height = 500;
        c.beginPath();
        c.moveTo(250, 0);
        c.lineTo(250, 100);
        c.strokeStyle = "brown";
        c.stroke();
    }

}

