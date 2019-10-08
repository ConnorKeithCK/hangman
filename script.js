var canvas = document.querySelector("canvas");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");
var difficulty = document.getElementById("difficulty");
var c = canvas.getContext("2d");
var word;

easyBtn.addEventListener("click", function(clickEvent) {
    setupCanvas();
    hideButtons();
    canvas.className = "";;
    difficulty.innerText = "You've selected EASY";
    drawHead();
    drawBody();
    drawLeftArm();
    drawRightArm();
    drawRightLeg();
    drawLeftLeg();
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

function hideButtons() {
    easyBtn.className = "hide";
    mediumBtn.className = "hide";
    hardBtn.className = "hide";
}

function setupCanvas() {
    canvas.width = 500;
    canvas.height = 500;
    c.beginPath();
    c.moveTo(250, 0);
    c.lineTo(250, 100);
    c.strokeStyle = "brown";
    c.stroke();
}

function drawHead() {
    c.strokeStyle = "black";
    c.beginPath();
    c.arc(250, 150, 50, 0, Math.PI * 2, false);
    c.stroke();
}

function drawBody() {
    c.beginPath();
    c.moveTo(250, 200);
    c.lineTo(250, 350);
    c.stroke();
}

function drawLeftArm() {
    c.beginPath();
    c.moveTo(250, 275);
    c.lineTo(175, 235);
    c.stroke();
}

function drawRightArm() {
    c.beginPath();
    c.moveTo(250, 275);
    c.lineTo(325, 235);
    c.stroke();
}

function drawLeftLeg() {
    c.beginPath();
    c.moveTo(250, 350);
    c.lineTo(175, 425);
    c.stroke();
}

function drawRightLeg() {
    c.beginPath();
    c.moveTo(250, 350);
    c.lineTo(325, 425);
    c.stroke();
}

function play() {
    var wordRequest = new XMLHttpRequest();
    wordRequest.open('GET', "https://hangman-api.lively.software");
    wordRequest.onreadystatechange = function() {
        if (wordRequest.readyState == 4 && wordRequest.status == 200) {
            word = JSON.parse(wordRequest)
        }
    }
    wordRequest.send();
    console.log(word);

}

