var canvas = document.querySelector("canvas");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var difficulty = document.getElementById("difficulty");
var c = canvas.getContext("2d");
var letterBank = document.getElementById("word");
var input = document.getElementById("input");
var userGuess = document.getElementById("userGuess");
var guessButton = document.getElementById("submitButton");
let drawStage = 1;
let game;
let gameWord;
let letters;
let spaces;
let alphabet = [
    "A","B","C", "D", "E","F","G","H",
    "I","J","K","L","M","N","O","P","Q",
    "R","S", "T","U","V","W","X","Y","Z"
]

easyBtn.addEventListener("click", function(clickEvent) {
    canvas.className = "";;
    difficulty.innerText = "You've selected EASY";
    game = new Hangman();
    game.setupCanvas();
    game.play();
    hideButtons();
})

mediumBtn.addEventListener("click", function(clickEvent) {
    canvas.className = "";
    difficulty.innerText = "You've selected MEDIUM";
    game = new Hangman();
    game.setupCanvas();
    game.play();
    hideButtons();
})

hardBtn.addEventListener("click", function(clickEvent) {   
    canvas.className = "";
    difficulty.innerText = "You've selected HARD";
    game = new Hangman();
    game.setupCanvas();
    game.play();
    hideButtons();
})

input.addEventListener("submit", function(submitEvent){
    submitEvent.preventDefault();
    let guess = game.checkGuess().toString().toUpperCase();
    if (alphabet.includes(guess)) {
        if (letters.includes(guess)) {
            for (var i = 0; i < alphabet.length; i++) {
                if (alphabet[i] == guess) {
                    alphabet.splice(i, 1);
                }
            }
            for (var x = 0; x < letters.length; x++) {
                if (letters[x] == guess) {
                    spaces[x] = guess;
                    letterBank.innerHTML = spaces.join(" ");
                }
            }      

            if (JSON.stringify(spaces) == JSON.stringify(letters)) {
                if (confirm("Game over! You have won! Would you like the play again?")) {
                    game = new Hangman();
                    game.setupCanvas();
                    game.play();
                    gameWord = "";
                    letterBank.innerHTML = " ";
                    drawStage = 1;
                    alphabet = [
                        "A","B","C", "D", "E","F","G","H",
                        "I","J","K","L","M","N","O","P","Q",
                        "R","S", "T","U","V","W","X","Y","Z"
                    ]
                    return;
                } else {
                    alert("Thanks for playing game is over!")
                }
            }
            
        } else {

            if (drawStage == 1) {
                game.drawHead();
            } 
            if (drawStage == 2) {
                game.drawBody();
            } 
            if (drawStage == 3) {
                game.drawLeftArm();
            } 
            if (drawStage == 4) {
                game.drawRightArm();
            } 
            if (drawStage == 5) {
                game.drawRightLeg();
            } 
            if (drawStage == 6) {
                game.drawLeftLeg();
                if (confirm("You lost! The word was " + gameWord + ". Would you like to play again?")) {
                    game = new Hangman();
                    game.setupCanvas();
                    game.play();
                    gameWord = "";
                    letterBank.innerHTML = " ";
                    drawStage = 1;
                    alphabet = [
                        "A","B","C", "D", "E","F","G","H",
                        "I","J","K","L","M","N","O","P","Q",
                        "R","S", "T","U","V","W","X","Y","Z"
                    ]
                    return;
                } else {
                    alert("Thanks for playing game is over!");
                }
            } 
            

            drawStage++;

            for (var i = 0; i < alphabet.length; i++) {
                if (alphabet[i] == guess) {
                    alphabet.splice(i, 1);
                }
            }
        }
    } else {
        alert("You have already guessed that letter, try again!");
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
                letters[i] = gameWord.charAt(i).toString().toUpperCase();
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

