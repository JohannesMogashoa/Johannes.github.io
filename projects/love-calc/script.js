let nameOne;
let nameTwo;
let invalid = "Name less than 3 characters";
let loveScore;

function init() {
    document.getElementById("results").style.display = "none";
    document.getElementById("invalid").style.display = "none";
}

function calcLove() {
    nameOne = String(document.getElementById("firstName").value);
    if (nameOne.length < 3) {
        return validateOne()
    }
    nameTwo = String(document.getElementById("secondName").value);
    if (nameTwo.length < 3) {
        return validateTwo()
    }
    loveScore = Math.floor(Math.random() * 100 + 1);
    lovePercent()
}

function lovePercent() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("percent").innerHTML = loveScore + "%";

    let loveComment;

    if (loveScore >= 85) {
        loveComment = " are made for each other!!! ❣❤💞💕💘💍";
    }
    else if (loveScore < 85 && loveScore >= 40) {
        loveComment = " can make it work!! ❤❤❤";
    }
    else if (loveScore < 40 && loveScore >= 15) {
        loveComment = " have slim chances! 🤷‍♂️🤷‍♀️";
    }
    else {
        loveComment = " shouldn't bother 💔💔💔";
    }
    document.getElementById("resultOutput").innerHTML = nameOne + " and " + nameTwo + loveComment;
}

function endGame() {
    window.location.reload();
}

function validateOne() {
    document.getElementById("invalid").style.display = "block";
    document.getElementById("invalid").innerHTML = invalid;
    return false
}
function validateTwo() {
    document.getElementById("invalidSecond").style.display = "block";
    document.getElementById("invalidSecond").innerHTML = invalid;
    return false
}