var game = document.getElementById("gamePanel");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var difficulty = document.getElementById("difficulty");
var wordRequest = new XMLHttpRequest();

easyBtn.addEventListener("click", function(clickEvent) {
    difficulty.innerText = "You've selected EASY";
    game.className = "";
    hideButtons();
    retrieveWord();
})

mediumBtn.addEventListener("click", function(clickEvent) {
    game.className = "";
    hideButtons();
    difficulty.innerText = "You've selected MEDIUM";
})

hardBtn.addEventListener("click", function(clickEvent) {    
    game.className = "";
    hideButtons();
    difficulty.innerText = "You've selected HARD";
})

function hideButtons() {
    easyBtn.className = "hide";
    mediumBtn.className = "hide";
    hardBtn.className = "hide";
}

function retrieveWord() {
    var wordRequest = new XMLHttpRequest();
    wordRequest.open('GET', "https://hangman-api.lively.software");
    wordRequest.onload = function() {
        var word = JSON.parse(wordRequest.responseText);
        console.log(word.word);
         
    };
    wordRequest.send();

}

function setupCanvas() {
    
}