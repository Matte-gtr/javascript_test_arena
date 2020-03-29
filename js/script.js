let power = "power";
let strict = "strict";
let sound = "sound";

function powerCheck(string) {
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
};

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

function callResult() {
    if (powerCheck(power) == true) {
        console.log("TRUE");
    } else
    console.log("FALSE");
};