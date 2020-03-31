let power = false;
let strict = false;
let sound = true;
let sequence = [];
let playerSequence = [];
let difficulty = 4;

const topLeft = $("#section-1");
const topRight = $("#section-2");
const bottomLeft = $("#section-3");
const bottomRight = $("#section-4");
const middle = $("#section-5");

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
        $(".console").html("Click Play to Start");
    } else {
        power = false;
        $(".console").html("");
        sequence = [];
        $(".play-button").html("Play");
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
        $("#hard-display").removeClass("hidden-button");
    };
});

window.addEventListener("keyup", function (key) {
    if (key.keyCode == 17) {
        $("#hard-display").addClass("hidden-button");
    };
});

function randomNumber(max) {
    newNum = Math.floor(Math.random() * Math.floor(max));
    if (newNum == 0) {
        return topLeft;
    } else if (newNum == 1) {
        return topRight;
    } else if (newNum == 2) {
        return bottomLeft;
    } else if (newNum == 3) {
        return bottomRight;
    } else if (newNum == 4) {
        return middle;
    };
};

function startGame() {
    if (power == true) {
        sequence = [];
        $(".play-button").html("Reset");
        let level = sequence.length + 1;
        $(".console").html(level);
        sequence.push(randomNumber(difficulty));
        playGame()
    };
};

function playGame() {
    for (let light of sequence) {
        light.child().addClass("active")
    };
};








