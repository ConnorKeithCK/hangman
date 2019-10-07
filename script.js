var canvas = document.querySelector("canvas");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var difficulty = document.getElementById("difficulty");
var c = canvas.getContext("2d");

easyBtn.addEventListener("click", function(clickEvent) {
    setupCanvas();
    hideButtons();
    retrieveWord();
    canvas.className = "";;
    difficulty.innerText = "You've selected EASY";
    console.log(word);

})

mediumBtn.addEventListener("click", function(clickEvent) {
    setupCanvas(); 
    hideButtons();
    retrieveWord();
    canvas.className = "";
    difficulty.innerText = "You've selected MEDIUM";
})

hardBtn.addEventListener("click", function(clickEvent) {   
    setupCanvas(); 
    hideButtons();
    retrieveWord();
    canvas.className = "";
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
    wordRequest.onload = function(wordLoad) {
        var word = setWord(JSON.parse(wordRequest.responseText));
    };
    wordRequest.send();
    
}

function setupCanvas() {
    canvas.width = 500;
    canvas.height = 500;
}
