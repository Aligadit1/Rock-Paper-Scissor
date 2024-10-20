var userScore = 0;
var compScore = 0;
var userScorePara = document.querySelector('#user-score');
var compScorePara = document.querySelector("#comp-score");
var choices = document.querySelectorAll(".choice");
var msg = document.querySelector("#msg");
var showWinner = function (userWin, userChoice, compChoice) {
    if (userWin) {
        msg.innerText = "You Win! Your ".concat(userChoice, " beats ").concat(compChoice);
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else {
        msg.innerText = "You lose! ".concat(compChoice, " beats your ").concat(userChoice);
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};
var genCompChoice = function () {
    var options = ["rock", "paper", "scissor"];
    var randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
var drawGame = function () {
    msg.innerText = "Game Was Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
};
var playGame = function (userChoice) {
    var compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        var userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else
            (userWin = compChoice === "rock" ? false : true);
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach(function (choice) {
    choice.addEventListener("click", function () {
        var userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
