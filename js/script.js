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
let gameRunning = false;

const topLeft = $("#section-1");
const topRight = $("#section-2");
const bottomLeft = $("#section-3");
const bottomRight = $("#section-4");
const middle = $("#section-5");
const gameConsole = $(".console");

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
        gameConsole.html("-");
        if (sound == true) {
            playSound("../sounds/power-on.mp3", 0.1);
        };
    } else {
        power = false;
        gameConsole.html("");
        sequence = [];
        playerTurn = false;
        clearInterval(interval);
        $(".play-button").html("PLAY");
        if (sound == true) {
            playSound("../sounds/power-off.mp3", 0.1);
        };
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
    } else {
        difficulty = 4;
    };
});

window.addEventListener("keydown", function (key) {
    if (key.keyCode == 17) {
        if (sequence.includes(4)) {
        } else {
            $("#hard-display").removeClass("hidden-button");
        };
    };
});

window.addEventListener("keyup", function (key) {
    if (key.keyCode == 17) {
        setTimeout(function () {
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
    gameRunning = true;
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
        gameRunning = false;
        setTimeout(function() {
            power = true;
        }, 300);
    };
};

function one() {
    if (sound == true) {
        playSound("../sounds/simonSound1.mp3", 1);
    };
    topLeft.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            topLeft.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            topLeft.children().removeClass("light");
        }, 200);
    };
};

function two() {
    if (sound == true) {
        playSound("../sounds/simonSound2.mp3", 1);
    };
    topRight.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            topRight.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            topRight.children().removeClass("light");
        }, 200);
    };
};

function three() {
    if (sound == true) {
        playSound("../sounds/simonSound3.mp3", 1);
    };
    bottomLeft.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            bottomLeft.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            bottomLeft.children().removeClass("light");
        }, 200);
    };
};

function four() {
    if (sound == true) {
        playSound("../sounds/simonSound4.mp3", 1);
    };
    bottomRight.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            bottomRight.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            bottomRight.children().removeClass("light");
        }, 200);
    };
};

function five() {
    middle.children().addClass("light");
    if (playerTurn == false) {
        setTimeout(function () {
            middle.children().removeClass("light");
        }, 500);
    } else {
        setTimeout(function () {
            middle.children().removeClass("light");
        }, 200);
    };
};

function playerGame(location) {
    if (power == true && playerTurn == true) {
        if (location == 0) {
            one();
            playerSequence.push(location);
            checkSequence();
        } else if (location == 1) {
            two();
            playerSequence.push(location);
            checkSequence();
        } else if (location == 2) {
            three();
            playerSequence.push(location);
            checkSequence();
        } else if (location == 3) {
            four();
            playerSequence.push(location);
            checkSequence();
        } else if (location == 4 && difficulty == 5) {
            five();
            playerSequence.push(location);
            checkSequence();
        };
        lightups = 0;
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
        if (level == 21) {
            gameConsole.html("WINNER!!!");
            setTimeout(function () {
                startGame();
            }, 10000);
            return;
        };
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

function playSound(src, volume) {
    let sound = new Audio(src);
    sound.volume = volume;
    sound.currentTime = 0;
    sound.play();
};