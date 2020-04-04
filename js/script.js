let power = false;
let strict = false;
let sound = true;
let sequence = [];
let playerSequence = [];
let difficulty = 4;
let playerTurn = false;
let lightups = 0;
let interval = 0;
let level;
let clicks = 0;

const topLeft = $("#section-1").children();
const topRight = $("#section-2").children();
const bottomLeft = $("#section-3").children();
const bottomRight = $("#section-4").children();
const middle = $("#section-5").children();
const gameConsole = $(".console")

function buttonPower(el) {
    let prnt = $(el).parent();
    let ths = $(el)
    if (prnt.css("backgroundColor") == "rgb(211, 211, 211)") {
        prnt.removeClass("button-background-off").addClass("button-background-on");
        ths.removeClass("button-off").addClass("button-on");
    } else {
        prnt.removeClass("button-background-on").addClass("button-background-off");
        ths.removeClass("button-on").addClass("button-off");
    };
};

$("#power-button").click(function () {
    if ($("#power-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        power = true;
        gameConsole.html("CLICK PLAY TO START");
    } else {
        power = false;
        gameConsole.html("");
        sequence = [];
        playerTurn = false;
        $(".play-button").html("PLAY");
    };
});

$("#strict-button").click(function () {
    if ($("#strict-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        strict = true;
    } else {
        strict = false;
    };
});

$("#sound-button").click(function () {
    if ($("#sound-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        sound = true;
    } else {
        sound = false;
    };
});

$("#hard-button").click(function () {
    if ($("#hard-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        difficulty = 5;
        middle.addClass("light");
    } else {
        difficulty = 4;
        middle.removeClass("light");
    };
});

window.addEventListener("keydown", function (key) {
    if (key.keyCode == 17) {
        $("#hard-display").removeClass("hidden-button");
    };
});

window.addEventListener("keyup", function (key) {
    if (key.keyCode == 17) {
        setTimeout(function() {
        $("#hard-display").addClass("hidden-button");
        }, 500);
    };
});

function randomNumber(max) {
    return newNum = Math.floor(Math.random() * Math.floor(max));
};

function startGame() {
    if (power == true) {
        sequence = [];
        playerSequence = [];
        lightups = 0;
        interval = 0;
        level = 1;
        $(".play-button").html("RESET");
        $(".console").html(level);
        sequence.push(randomNumber(difficulty));
        playerTurn = false;
        power = false;
        interval = setInterval(playGame, 1000);
    };
};

function playGame() {
    clicks = 0;
    playerSequence = [];
    if (playerTurn == false) {
        setTimeout(function () {
            if (sequence[lightups] == 0) {
                one();
            } else if (sequence[lightups] == 1) {
                two();
            } else if (sequence[lightups] == 2) {
                three();
            } else if (sequence[lightups] == 3) {
                four();
            } else if (sequence[lightups] == 4) {
                five();
            };
            lightups++
        }, 300)
    };
    if (lightups == level) {
        clearInterval(interval);
        playerTurn = true;
        power = true;
    };
};

function one() {
    topLeft.removeClass("light");
    setTimeout(function () {
        topLeft.addClass("light");
    }, 500);
};

function two() {
    topRight.removeClass("light");
    setTimeout(function () {
        topRight.addClass("light");
    }, 500);
};

function three() {
    bottomLeft.removeClass("light");
    setTimeout(function () {
        bottomLeft.addClass("light");
    }, 500);
};

function four() {
    bottomRight.removeClass("light");
    setTimeout(function () {
        bottomRight.addClass("light");
    }, 500);
};

function five() {
    middle.removeClass("light");
    setTimeout(function () {
        middle.addClass("light");
    }, 500);
};

function playerGame(location) {
    if (power == true && playerTurn == true) {
        if (location == 0) {
            one();
            playerSequence.push(location);
        } else if (location == 1) {
            two();
            playerSequence.push(location);
        } else if (location == 2) {
            three();
            playerSequence.push(location);
        } else if (location == 3) {
            four();
            playerSequence.push(location);
        } else if (location == 4 && difficulty == 5) {
            five();
            playerSequence.push(location);
        };
        lightups = 0;
        checkSequence();
    };
};

function checkSequence() {
    if (sequence[clicks] == playerSequence[clicks]) {
        clicks++;
    } else {
        playerTurn = false;
        playerSequence = [];
        clicks = 0;
        if (strict == false) {
            gameConsole.html("X-X");
            power = false;
            setTimeout(function () {
                interval = setInterval(playGame, 1000);
                gameConsole.html(level);
                return
            }, 1000);
        } else {
            gameConsole.html("X-X RESTART");
            setTimeout(function () {
                startGame();
                return;
            }, 1000);
        };
    };
    if (level == clicks) {
        playerTurn = false;
        level++;
        gameConsole.html("LEVEL UP");
        sequence.push(randomNumber(difficulty));
        setTimeout(function () {
            gameConsole.html(level);
            power = false;
            interval = setInterval(playGame, 1000);
            gameConsole.html(level);
        }, 1000);
    };
};