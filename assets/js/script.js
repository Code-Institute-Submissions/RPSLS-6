// Start 

function GetStarted() {
    document.getElementById('mainBodyA').style.display = 'none';
    document.getElementById('mainBodyB').style.display = 'flex';
}

var imgArr = [
    "assets/images/rock.png",
    "assets/images/paper.png",
    "assets/images/scissors.png",
    "assets/images/lizard.png",
    "assets/images/spock.png",
];
var countdown = 4;
var imgValComp = 0;
var selectedOption = "rock";
var running = 0;

var a, x, y, z;

// Scoring function

function Conditional() {
    if (document.getElementById('lives').innerText == 0) {
        alert('Please reset or refresh the page to try again');
    }
    else {
        Start();
    }
}

// Computer actions on start 

function Start() {
    running = 1;
    document.getElementById('userID').innerHTML = `You`;
    document.getElementById('computerID').innerHTML = `Computer`;

    countdown = 4;
    imgValComp = 0;
    x = setInterval(function () {
        document.getElementById('countdown').innerText = countdown;
        countdown = countdown - 1;
    }, 1000);

    y = setInterval(function () {
        imgValComp = Math.floor(Math.random() * 4);
        document.getElementById('computerImg').src = imgArr[imgValComp];
    }, 100);

    z = setTimeout(function () {
        clearInterval(x);
        clearInterval(y);

        GameLogic();
    }, 5000);
}

// Game logic begin

function GameLogic() {
    var userVal = selectedOption;
    var compVal = imgArr[imgValComp].split("/")[2].split(".")[0];
    if ((userVal == 'rock' && (compVal == 'lizard' || compVal == 'scissors')) ||
        (userVal == 'paper' && (compVal == 'rock' || compVal == 'spock')) ||
        (userVal == 'scissors' && (compVal == 'paper' || compVal == 'lizard')) ||
        (userVal == 'lizard' && (compVal == 'spock' || compVal == 'paper')) ||
        (userVal == 'spock' && (compVal == 'scissors' || compVal == 'rock'))) {
        document.getElementById('yourScore').innerText = parseInt(document.getElementById('yourScore').innerText) + 1;
        document.getElementById('userID').innerHTML = `You <span style = "color: green;">Won</span>`;
        document.getElementById('computerID').innerHTML = `Computer <span style = "color: red;">Lost</span>`;
    }
    else if ((userVal == 'rock' && compVal == 'rock') ||
        (userVal == 'paper' && compVal == 'paper') ||
        (userVal == 'scissors' && compVal == 'scissors') ||
        (userVal == 'lizard' && compVal == 'lizard') ||
        (userVal == 'spock' && compVal == 'spock')) {;
        document.getElementById('userID').innerHTML = `You <span style = "color: grey;">Draw</span>`;
        document.getElementById('computerID').innerHTML = `Computer <span style = "color: grey;">Draw</span>`;
    }
    else {
        document.getElementById('compScore').innerText = parseInt(document.getElementById('compScore').innerText) + 1;
        document.getElementById('userID').innerHTML = `You <span style = "color: red;">Lost</span>`;
        document.getElementById('computerID').innerHTML = `Computer <span style = "color: green;">Won</span>`;

        document.getElementById('lives').innerText = parseInt(document.getElementById('lives').innerText) - 1;
        if (parseInt(document.getElementById('lives').innerText) == 0) {
            a = setTimeout(function () {
                alert('Game Over. Try Again');
            }, 500);

        }
    }
    document.getElementById('countdown').innerText = 5;
    running = 0;
}

// Game logic end

// Reset Button Start

function Reset() {
    clearInterval(x);
    clearInterval(y);
    clearTimeout(z);

    document.getElementById('yourScore').innerText = 0;
    document.getElementById('compScore').innerText = 0;
    document.getElementById('lives').innerText = 5;
    document.getElementById('countdown').innerText = 5;
    document.getElementById('userID').innerHTML = `You`;
    document.getElementById('computerID').innerHTML = `Computer`;
}

// Reset Button end

// Player selection start

function Selection(item) {
    if (running == 1) {
        document.getElementById('userSelection').getElementsByTagName('img')[0].style.borderColor = 'transparent';
        document.getElementById('userSelection').getElementsByTagName('img')[1].style.borderColor = 'transparent';
        document.getElementById('userSelection').getElementsByTagName('img')[2].style.borderColor = 'transparent';
        document.getElementById('userSelection').getElementsByTagName('img')[3].style.borderColor = 'transparent';
        document.getElementById('userSelection').getElementsByTagName('img')[4].style.borderColor = 'transparent';
        document.getElementById(item).style.borderColor = 'red';
        selectedOption = item;
    }
}

// Player selection end