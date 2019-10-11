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
let game;
let gameWord;
let letters;
let spaces;

easyBtn.addEventListener("click", function(clickEvent) {
    canvas.className = "";;
    difficulty.innerText = "You've selected EASY";
    game = new Hangman();
    game.setupCanvas();
    game.play();
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
    let guess = game.checkGuess();
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] == guess) {
            alert("Your guess was CORRECT!");
            spaces[i] = guess.toString.toUpperCase();
        } else {
            alert("Your guess was INCORRECT!");
        }
    }
    
})

function hideButtons() {
    easyBtn.className = "hide";
    mediumBtn.className = "hide";
    hardBtn.className = "hide";
}

class Hangman {
    constructor() {}

    async play() {
        gameWord = await this.retrieveWord();
        console.log(gameWord);
        input.className = "";
        letters = [];
        spaces = [];
        for (var i = 0; i < gameWord.toString().length; i++) {
                letters[i] = gameWord.charAt(i);
                spaces[i] =  "_    ";
                letterBank.appendChild(document.createTextNode(spaces[i]));
        }
    }

    retrieveWord() {
        return new Promise(function(resolve, reject) {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState !== request.DONE) {
                    return;
                }

                const response = JSON.parse(request.responseText);

                resolve(response.word);
            };

            request.open("GET", "https://hangman-api.lively.software");
            request.send();
        });
    }
    checkGuess() {
        var alphabet = [
            "A","B","C", "D", "E","F","G","H",
            "I","J","K","L","M","N","O","P","Q",
            "R","S", "T","U","V","W","X","Y","Z"
        ]
        var guess = userGuess.value;
        return guess;
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

