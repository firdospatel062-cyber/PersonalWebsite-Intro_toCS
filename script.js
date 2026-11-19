
// About Me button
function showAlert() {
    alert("Hi! My name is Firdos. I am a Computer Science student!");
}

// Change background button
function changeBackground() {
    document.body.style.backgroundColor = "pink";
}

// Change name button
function changeName() {
    document.querySelector("h1").innerHTML = "Welcome to Firdos's Website!";
}

// Show date button
function showDate() {
    document.getElementById("date").innerHTML = new Date();
}

// Increase font size button
function changeFontSize() {
    document.body.style.fontSize = "25px";
}

// Hide and show paragraph button
function hideParagraph() {
    var paragraph = document.querySelector("p");

    if (paragraph.style.display == "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

// Counter
var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

// Welcome form
function welcome() {
    var name = document.getElementById("visitorName").value;

    document.getElementById("welcomeMessage").innerHTML =
        "Welcome " + name + "!";
}

function add() {
    document.getElementById("result").innerHTML =
    Number(document.getElementById("num1").value) +
    Number(document.getElementById("num2").value);
}

function subtract() {
    document.getElementById("result").innerHTML =
    Number(document.getElementById("num1").value) -
    Number(document.getElementById("num2").value);
}

function multiply() {
    document.getElementById("result").innerHTML =
    Number(document.getElementById("num1").value) *
    Number(document.getElementById("num2").value);
}

function divide() {
    if (Number(document.getElementById("num2").value) == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("result").innerHTML =
        Number(document.getElementById("num1").value) /
        Number(document.getElementById("num2").value);
    }
}

