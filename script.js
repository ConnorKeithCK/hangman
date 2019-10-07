var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");

easyBtn.addEventListener("click", function(clickEvent) {
    hideButtons();
})

mediumBtn.addEventListener("click", function(clickEvent) {
    hideButtons();
})

hardBtn.addEventListener("click", function(clickEvent) {    
    hideButtons();
})

function hideButtons() {
    easyBtn.className = "hide";
    mediumBtn.className = "hide";
    hardBtn.className = "hide";
}