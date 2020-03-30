let power = false;
let strict = false;
let sound = true;

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

$("#power-button").click(function() {
    if($("#power-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        console.log("Power on");
        power = true;
    } else {
        console.log("Power off");
        power = false;
    };
});

$("#strict-button").click(function() {
    if($("#strict-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        console.log("strict on");
        strict = true;
    } else {
        console.log("strict off");
        strict = false;
    };
});

$("#sound-button").click(function() {
    if($("#sound-button-container").css("backgroundColor") == "rgb(211, 211, 211)") {
        console.log("sound on");
        sound = true;
    } else {
        console.log("sound off");
        sound = false;
    };
});













/*function powerCheck(string) {
    let trget = "#" + string + "-button-container";
    console.log(trget);
    if ($(trget).css("backgroundColor") == "rgb(211, 211, 211)") {
        value = false;
        console.log(value);
    } else {
        value = true;
        console.log(value);
    };
    return value;
};*/

/*function callResult() {
    if (powerCheck(power) == true) {
        console.log("TRUE");
    } else
    console.log("FALSE");
};*/